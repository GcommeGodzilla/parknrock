import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import toggleMenu from '../lib/menu'
import styles from '../styles/Root.module.css'

export default function Layout({ children }) {

  return (
    <>
    <div className={styles.container}>
      <Head>
        <title>PARKN'ROCK</title>
        <meta name="description" content="Les pochettes d'albums rock mythiques revisitées" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.headerbox} onClick={toggleMenu}>
          <Image
            src={'/img/logo-parknrock-eclair.svg'}
            width={50}
            height={50}
            priority={'true'}
          >
          </Image>
        </div>
        <nav  className={`${styles.nav} hidden`}>
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
                <li><a href='https://studioburo.com'>
                  <Image 
                    src={'/img/img-studioburo.png'}
                    width={36}
                    height={36}
                    priority={'true'}
                  ></Image>
                </a></li>
                <li><a href='https://studioburo.com'>
                  <Image 
                    src={'/img/img-facebook-icon.jpg'}
                    width={36}
                    height={36}
                    priority={'true'}
                  ></Image>
                </a></li>
                <li><a href='https://studioburo.com'>
                  <Image 
                    src={'/img/img-myspace-icon.jpg'}
                    width={36}
                    height={36}
                    priority={'true'}
                  ></Image>
                </a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        {children}
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