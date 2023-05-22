import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import toggleMenu from '../lib/menu'
import styles from '../styles/Root.module.css'

export default function Root() {

  return (
    <>
    <div className={styles.container}>
      <Head>
        <title>PARKN'ROCK</title>
        <meta name="description" content="Les pochettes d'albums mythiques revisitées" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <div className={styles.headerbox} onClick={toggleMenu}>
          <Image
            src={'/img/logo-parknrock-eclair.svg'}
            width={45}
            height={45}
            alt={'logo'}
            priority={'true'}
          >
          </Image>
        </div>
        <nav className={`${styles.nav} hidden`}>
          <div onClick={toggleMenu}>Fermer X</div>
          <ul>
            <li>
              <Link href={'/dates'}>
                <span className={'chevron'}>»</span>Dates
              </Link>
            </li>
            <li>
              <Link href={'/oeuvres'}>
                <span className={'chevron'}>»</span>Œuvres
              </Link>
            </li>
            <li>
              <Link href={'/artistes'}>
                <span className={'chevron'}>»</span>Artistes
              </Link>
            </li>
            <li>
              <Link href={'/partenaires'}>
                <span className={'chevron'}>»</span>Partenaires
              </Link>
            </li>
            <li>
              <a href='https://studioburo.com/contact'><span className={'chevron'}>»</span>Contact</a>
            </li>
            <li>
              <ul>
                <li><a href='https://studioburo.com' target="_blank">
                  <Image 
                    src={'/img/img-studioburo.png'}
                    width={36}
                    height={36}
                    priority={'true'}
                    alt={'logo studioburo'}
                  ></Image>
                </a></li>
                <li><a href='https://www.instagram.com/studioburo' target="_blank">
                  <Image 
                    src={'/img/img-facebook-icon.jpg'}
                    width={36}
                    height={36}
                    priority={'true'}
                    alt={'logo facebook'}
                  ></Image>
                </a></li>
                <li><a href='https://myspace.com/studioburo' target="_blank">
                  <Image 
                    src={'/img/img-myspace-icon.jpg'}
                    width={36}
                    height={36}
                    priority={'true'}
                    alt={'logo myspace'}
                  ></Image>
                </a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <div className={styles.figure} onClick={toggleMenu}>
          <Image
            src={'/img/2010-postics-hunky_dory.1000x1000px.webp'}
            width={350}
            height={350}
            priority={'true'}
            alt={'Hunky Dory by Postics'}
          ></Image>
          <Image
            src={'/img/logo-parknrock-bandeau.svg'}
            width={350}
            height={55}
            priority={'true'}
            alt={"Park'N'Rock logo-titre"}
          >
          </Image>
          <hr></hr>
          <hr></hr>
          <div></div>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>
        © Studioburo 2006-2022 / All rights reserved.
        </p>
        <p>No part of this website may be reproduced, stored in a retrival system in any form or by any means - electronic, mechanical, photocopying, recording or otherwise without prior permission from Studiobüro.
        </p>
      </footer>
    </div>
    </>
  )
}
