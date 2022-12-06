import clientPromise from "../lib/mongodb"
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout.js'
import Thumb from '../components/Thumb.js'
import styles from '../styles/Oeuvres.module.css'
import getScreenData from '../lib/screendata.js'
import toggleMenu from "../lib/menu"

export async function getServerSideProps(context) {
  const client = await clientPromise;
  const db = client.db("parknrock"); 
  let oeuvres = await db.collection("oeuvres").find({}).toArray();
  oeuvres = JSON.parse(JSON.stringify(oeuvres));
    
  return {
    props: { oeuvres },
};}

export default function Oeuvres({oeuvres}) {
  const nextPage = function() {
    let itemElts = document.querySelectorAll('.oeuvre');
    for (let i=0;i<itemElts.length;i++) { itemElts[i].classList.toggle('hidden') }
  }

  let arrayIndex = 0;
  let screenData = {};
  getScreenData(screenData);
  return (
    <>
      <Layout>
      <div className={`${styles.container} ${screenData.shape}`}>
        <ul className={styles.list}>
          <li key={'item-0'} className={`${styles.item} ${styles.pnrItem}`}>
            <Image 
              src={"/img/logo-parknrock-carre.svg"}
              fill={true}
              alt={"Logo PNR"}
              priority={true}
            ></Image>
          </li>
          {oeuvres.map((oeuvre) => {
            arrayIndex++
            return (
              <li key={'item-' + arrayIndex} className={styles.item + (arrayIndex> 17 ? ' hidden' : '') + ' oeuvre'}>
                <Link href={'/oeuvres/' + oeuvre.titre}>
                  <Thumb 
                    o={oeuvre}
                  ></Thumb>
                </Link>
              </li>                
            ) 
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
  )
}