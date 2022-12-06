import clientPromise from '../lib/mongodb'
import toggleMenu from '../lib/menu'
import Layout from '../components/layout'
import Image from 'next/image'
import styles from '../styles/Dates.module.css'

export async function getServerSideProps(context) {
  const client = await clientPromise;
  const db = client.db("parknrock");
  
  let dates = await db.collection("dates").find({}).toArray();
  dates = JSON.parse(JSON.stringify(dates));
  
  return {
    props: { dates },
  };
}

export default function Dates( {dates} ) {
  let arrayIndex = -1;
  const nextPage = function() {
    let itemElts = document.querySelectorAll('.itemslist li, .dates li');
    for (let i=0;i<itemElts.length;i++) { itemElts[i].classList.toggle('hidden') }
  }

  return(
    <>
      <Layout>
        <div className={styles.container}>
          <div>
            <h1>
              <Image
                src={'/img/logo-parknrock-bandeau.svg'}
                width={316.4}
                height={50}
              ></Image>
            </h1>
            <ul className={'dates'}>
              <li>2009</li>
              <li className={'hidden'}>2010</li>
            </ul>
            <ul className={`${styles.list} itemslist`}>
            {dates.map((date) => {
              arrayIndex++;
              return (
                <li key={'item-' + arrayIndex} className={styles.item + (arrayIndex>3  ? ' hidden' : '')}>
                  <h2>
                    {date.date} | <span className={"ville"}>{date.lieu.ville}</span></h2>
                  <h3>
                    <span className={styles.slashicon}>
                      <span>/</span>
                      <span>/</span>
                      <span>/</span>
                    </span>
                    <a href={date.lieu.link}>{date.lieu.nom}</a>
                  </h3>
                  <address>{date.lieu.adresse}, {date.lieu.cp} {date.lieu.ville}</address>
                  { date.bands ? (
                    <>
                      <ul>
                        {date.bands.map((band) => {
                          if (band.link) {
                            return(
                            <>
                              <li key={band.index} className={styles.bandsitem}>
                                <a href={band.link}>{band.name}</a>
                              </li>
                            </>
                            )
                          } else {
                            return(
                            <>
                              <li key={band.index} className={styles.bandsitem}>
                                <span>{band.name}</span>
                              </li>
                            </>
                            )
                          }  
                        })}
                      </ul>
                    </>
                  ) : (<></>)
                  }
                </li>
              );
            })}
          </ul>
          </div>
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