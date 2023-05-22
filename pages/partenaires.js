import Layout from "../components/layout"
import toggleMenu from "../lib/menu"
import Image from 'next/image'
import styles from '../styles/Partenaires.module.css'

export default function Partenaires() {
  const nextPage = function() {
    let itemElts = document.querySelectorAll('.item');
    for (let i=0;i<itemElts.length;i++) { itemElts[i].classList.toggle('hidden') }
  }

  return (
    <>
      <Layout>
        <div className={styles.container}>
          <section className={styles.credits}>
            <p>Un projet conduit par <a href="https://studioburo.com" target="blank">Studioburo</a></p>
            <dl>
              <dt>Direction artistique</dt>
              <dd>Postics / Jérôme Sachs</dd>
              <dt>Graphisme</dt>
              <dd>Nolwenn Fouré</dd>
              <dt>Réalisation</dt>
              <dd>Guillaume Gouin</dd>
              <dt>Contact</dt>
              <dd><a href="mailto:contact@studioburo.com" target="blank">contact@studioburo.com</a></dd>
            </dl>
            <p>PARKN'ROCK <br/>est soutenu par <br/><a href="https://petitbain.org" target="blank"><Image width={80} height={80} src="/img/logo-petit_bain.svg" alt={"logo Petit Bain"}></Image></a></p>
          </section>
          <section className={styles.list}>
            <ul>
              <li className={'item'}>
                <a href="https://www.mainsdoeuvres.org" target="blank">
                  <Image 
                    src="/img/logo-mains_doeuvres.svg" 
                    width={150} 
                    height={90}
                    alt={"logo Mains d'oeuvre"}
                  ></Image>
                </a>
              </li>
              <li className={'item'}>
                <a href="http://www.aires-libres.com" target="blank">
                  <Image 
                    src="/img/logo-aires-libres.png" 
                    width={150} 
                    height={90}
                    alt={"logo Aires Libres"}
                  ></Image>
                </a>
              </li>
              <li className={'item'}>
                <a href="https://www.artsfactory.net" target="blank">
                  <Image 
                    src="/img/logo-arts_factory.svg" 
                    width={150} 
                    height={90}
                    alt={"logo Art Factory"}
                  ></Image>
                </a>
              </li>
              <li className={'item'}>
                <a href="http://www.espaceghp.com" target="blank">
                  <Image 
                    src="/img/logo-ghp.jpg" 
                    width={150} 
                    height={90}
                    alt={"logo GHP"}
                  ></Image>
                </a>
              </li>
              <li className={'item'}>
                <a href="http://letmetellyoumore.blogspot.com/2009/03/galerie-fabrik-89.html" target="blank">
                  <Image 
                    src="/img/logo-fabrik89.jpg" 
                    width={150} 
                    height={34}
                    alt={"logo Fabrik89"}
                  ></Image>
                </a>
              </li>
              <li className={'item'}>
                <a href="https://ghp.typepad.com" target="blank">
                  <Image 
                    src="/img/logo-grrrrr.png" 
                    width={150} 
                    height={90}
                    alt={"logo Grrrrr"}
                  ></Image>
                </a>
              </li>
              <li className={'item hidden'}>
                <a href="https://www.beauxarts.com" target="blank">
                  <Image 
                    src="/img/logo-beaux_arts_magazine.svg" 
                    width={150} 
                    height={90}
                    alt={"logo Beaux-Arts magazine"}
                  ></Image>
                </a>
              </li>
              <li className={'item hidden'}>
                <a href="https://www.tsugi.fr" target="blank">
                  <Image 
                    src="/img/logo-tsugi.jpg" 
                    width={150} 
                    height={90}
                    alt={"logo Tsugi"}
                  ></Image>
                </a>
              </li>
              <li className={'item hidden'}>
                <a href="http://clarkmagazine.com" target="blank">
                  <Image 
                    src="/img/logo-clark_magazine.svg" 
                    width={150} 
                    height={90}
                    alt={"logo Clarks magazine"}
                  ></Image>
                </a>
              </li>
              <li className={'item hidden'}>
                <a href="http://mondomix.com" target="blank">
                  <Image 
                    src="/img/logo-mondomix.png" 
                    width={150} 
                    height={90}
                    alt={"logo Mondomix"}
                  ></Image>
                </a>
              </li>
              <li className={'item hidden'}>
                <a href="http://www.troiscouleurs.fr" target="blank">
                  <Image 
                    src="/img/logo-trois_couleurs.png" 
                    width={150} 
                    height={90}
                   alt={"logo Trois Couleurs"}
                  ></Image>
                </a>
              </li>
              <li className={'item hidden'}>
                <a href="https://www.radiocampusparis.org" target="blank">
                  <Image 
                    src="/img/logo-radio_campus.svg" 
                    width={150} 
                    height={90}
                    alt={"logo Radio Campus"}
                  ></Image>
                </a>
              </li>
            </ul>
          </section>
          <div className={styles.nav}>
            <ul>
              <li onClick={nextPage}>Suiv. {">"}</li>
              <li onClick={toggleMenu}>Menu <span className="menu-icon" role="icon"><span>=</span><span>=</span></span></li>
            </ul>
          </div>
        </div>
      </Layout>
    </>
  );
}