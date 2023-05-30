import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import toggleMenu from '../lib/menu'
import toggleLogo from '../lib/logo'
import styles from '../styles/Root.module.css'

export default function Root() {

  return (
    <>
    <div className={styles.container}>
      <Head>
        <title>LP1X1</title>
        <meta name="description" content="Les pochettes d'albums mythiques revisitées" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <div className={styles.headerbox} onClick={toggleMenu} onMouseEnter={toggleLogo} onMouseLeave={toggleLogo}>
          <Link href="/" >
            <Image
              src={'/img/logo-LP1x1_vagues.svg'}
              width={50}
              height={50}
              priority={'true'}
              alt={'logo'}
              className={'logo-positif'}
            ></Image>
            <Image
              src={'/img/logo-LP1x1_vagues_negatif.svg'}
              width={50}
              height={50}
              priority={'true'}
              alt={'logo'}
              className={'logo-negatif hidden'}
            ></Image>
          </Link>
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
              <Link href={'/a-propos'}>
                <span className={'chevron'}>»</span>À propos
              </Link>
            </li>
            <li>
              <Link href={'/partenaires'}>
                <span className={'chevron'}>»</span>Partenaires
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <div className={styles.figure}>
          <Link href='/oeuvres'>
            <Image
              src={'/img/LP1x1_disque_vinyl_avec_sticker.jpg'}
              fill={true}
              objectFit={'contain'}
              priority={'true'}
              alt={'Vinyl LP1X1 par Postics'}
            ></Image>
          </Link>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>
        © Studioburo 2006-2023 / All rights reserved.
        </p>
        <p>No part of this website may be reproduced, stored in a retrival system in any form or by any means - electronic, mechanical, photocopying, recording or otherwise without prior permission from Studiobüro.
        </p>
      </footer>
    </div>
    </>
  )
}
