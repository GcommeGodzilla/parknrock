import Layout from '../../components/layout'
import Artiste from '../../components/Artiste'
import Thumb from '../../components/Thumb'
import Image from 'next/image'
import Link from 'next/link'
import getScreenData from '../../lib/screendata'
import clientPromise from '../../lib/mongodb'
import { useRouter } from 'next/router'
import styles from '../../styles/Oeuvre.module.css'
import toggleMenu from '../../lib/menu'

export async function getServerSideProps(context) {
  const client = await clientPromise;
  const db = client.db("parknrock");
      
  let oeuvres = await db.collection("oeuvres").find({}).toArray();
  oeuvres = JSON.parse(JSON.stringify(oeuvres));
  let artistes = await db.collection("artistes").find({}).toArray();
  artistes = JSON.parse(JSON.stringify(artistes));
      
  return {
    props: { artistes, oeuvres },
  };
}

const Oeuvre = function({artistes, oeuvres}) {
  const router = useRouter();
  const oeuvreID = router.query.id;
  const oeuvre = oeuvres.find(o => o.titre === oeuvreID);

  const oeuvreIndex = oeuvres.indexOf(oeuvre); 
  var precOeuvreID, suivOeuvreID;
  if (oeuvreIndex==0) {
    var precindex= oeuvres.length -1;
    precOeuvreID = oeuvres[precindex].titre;
  } else { precOeuvreID = oeuvres[oeuvreIndex-1].titre; };
  if (oeuvreIndex==(oeuvres.length -1)) { suivOeuvreID = oeuvres[0].titre; }
  else { suivOeuvreID = oeuvres[oeuvreIndex+1].titre; };
  const artiste = artistes.find(a => a._id === oeuvre.artiste);
  const artisteoeuvres = [];
  //determine l'index du post dans l'archive pour la navigationa inter-posts
  oeuvres.map((o) => {
    if ( (o.artiste === oeuvre.artiste) && (o != oeuvre) ) {artisteoeuvres.push(o)} ;
  });

  let screenData = {};
  getScreenData(screenData);

  return (
    <>
      <Layout>
        <div className={`${styles.container} ${screenData.shape}`}>
          <div className={styles.grid}>
            <Image className={styles.oeuvreimg}
              src={"/img/" + oeuvre.img + ".1000x1000px.webp"}
              fill={true}
              priority={true}
            ></Image>
            <Image className={styles.albulmimg}
              src={"/img/" + oeuvre.albulm.img + ".200x200px.jpg"}
              fill={true}
              priority={true}
            ></Image>
            <p><em>{oeuvre.albulm.titre}</em><br/>( {oeuvre.albulm.artiste} )</p>
            <div>
              <Artiste
                nom={artiste.nom}
                link={artiste.link}
                pays={artiste.pays}
              ></Artiste>
            </div>
            <ul className={styles.artisteoeuvres}>
              {artisteoeuvres.map((artisteo)=> {
                if(artisteo != oeuvre) {
                  return (
                    <li>
                      <Link href={"/oeuvres/"+ artisteo.titre}>
                        <Thumb o={artisteo}></Thumb>
                      </Link>
                      
                    </li>
                  )
                }
              }) }
            </ul>
          </div>
          <div className={styles.nav}>
            <ul>
                <li><Link href={"/oeuvres/"+ precOeuvreID}>{"<"} Préc.</Link></li>
                <li><Link href={"/oeuvres/"+ precOeuvreID}>Suiv. {">"}</Link></li>
                <li onClick={toggleMenu}>Fermer X</li>
            </ul>
          </div>
        </div>
      </Layout>
    </>
  )
}
export default Oeuvre
