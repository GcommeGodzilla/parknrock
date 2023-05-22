import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import toggleMenu from '../lib/menu'
import styles from '../styles/Root.module.css'
import {useRef, useEffect} from 'react'

export default function Layout({ children }) {

  var currentBg = "url('/img/2010-postics-hunky_dory.200x200px.webp')";
  var newBg;
  const mainContainerRef = useRef();

  const getNewBg = function() {
    let randomNb = Math.floor(Math.random() * 5);
    if (randomNb < 1) newBg="url('/img/2010-postics-hunky_dory.200x200px.webp')";
    else if ((randomNb >= 1) && (randomNb < 2)) newBg="url('/img/2009-katey_jean_harvey-how_it_feel_to_be_something_on.200x200px.webp')";
    else if ((randomNb >= 2) && (randomNb < 3)) newBg="url('/img/2009-katey_jean_harvey-the_power_of_failing.200x200px.webp')";
    else if ((randomNb >= 3) && (randomNb < 4)) newBg="url('/img/2009-katy_jean_harvey-weezer.200x200px.webp')";
    else if (randomNb >= 4) newBg="url('/img/2009-patrick_gildersleeves-im_a_believer.200x200px.webp')";
  }

  const changeBg = function() {
    if(mainContainerRef.current !== null) {
      while (newBg === currentBg) getNewBg();
      if (newBg !== currentBg) currentBg = newBg;
      //console.log(currentBg);
      mainContainerRef.current.style.backgroundImage= currentBg;
    }
    /*while (newBg === currentBg) getNewBg();
    if (newBg !== currentBg) currentBg = newBg;
    //console.log(currentBg);
    mainContainerRef.current.style.backgroundImage= currentBg;*/
  }

  useEffect( () => {setInterval(changeBg, 5000 )}, [])

  return (
    <>
    <div className={styles.container} style={{backgroundImage: currentBg}} ref={mainContainerRef}>
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
            alt={'logo'}
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