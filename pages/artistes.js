import clientPromise from "../lib/mongodb"
import toggleMenu from '../lib/menu'
import Layout from "../components/layout"
import Artiste from '../components/Artiste'
import styles from '../styles/Artistes.module.css'

export async function getServerSideProps(context) {
  const client = await clientPromise;
  const db = client.db("parknrock");
  
  let artistes = await db.collection("artistes").find({}).toArray();
  artistes = JSON.parse(JSON.stringify(artistes));
  
  return {
    props: { artistes },
  };
}

export default function Artistes({ artistes }) {
  let arrayIndex = -1;
  const nextPage = function() {
    let itemElts = document.querySelectorAll('.list li');
    for (let i=0;i<itemElts.length;i++) { itemElts[i].classList.toggle('hidden') }
  }

  return (
    <>
      <Layout>
        <div className={styles.container}>
          <ul className={'list'}>
            {artistes.map((artiste) => {
              arrayIndex++
              return (
                <li key={'item-' + arrayIndex} className={styles.item + (arrayIndex> 6 ? ' hidden' : '')}>
                  <Artiste 
                    nom={artiste.nom}
                    link={artiste.link}
                    pays={artiste.pays}
                  ></Artiste>
                </li>
              );
            })}
          </ul>
          <div className={styles.nav}>
            <ul>
                <li onClick={nextPage}>Suiv. {">"}</li>
                <li onClick={toggleMenu}>Fermer X</li>
            </ul>
          </div>
        </div>
      </Layout>
    </>
  );
}