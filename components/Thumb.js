import Image from 'next/image'
import styles from '../styles/Thumb.module.css'
import { useEffect,  useRef } from 'react'

export default function Thumb({o}) {
  if(typeof window!=='undefined') {
    useEffect( ()=> { //Enregistre les urls des imgs du thumb pour le background du flipper 
      var albulmBg = albulmRef.current.querySelector('img').src;
      var pnrBg = pnrRef.current.querySelector('img').src;
      containerRef.current.style.setProperty('--albulm-bg', 'url(' + albulmBg + ')')
      containerRef.current.style.setProperty('--pnr-bg', 'url(' + pnrBg + ')')
    }, [/*containerRef*/])
  }

  const showAlbulm = function() {
      albulmRef.current.classList.add('hidden');
      pnrRef.current.classList.add('hidden');
      flipperRef.current.classList.remove('hidden');
      flipperRef.current.classList.add('activeThumb');
      flipperRef.current.style.backgroundImage = 'var(--pnr-bg)';
      setTimeout(()=>{
        flipperRef.current.style.backgroundImage = 'var(--albulm-bg)';
        albulmRef.current.classList.add('hidden');
      }, 275)
      setTimeout(()=>{
        albulmRef.current.classList.remove('hidden');
        pnrRef.current.classList.add('hidden');
        flipperRef.current.classList.add('hidden');
        flipperRef.current.classList.remove('activeThumb'); 
      }, 550);
  }
  const showPnr = function() {
      albulmRef.current.classList.add('hidden');
      pnrRef.current.classList.add('hidden');
      flipperRef.current.classList.remove('hidden');
      flipperRef.current.classList.add('activeThumb');
      flipperRef.current.style.backgroundImage = 'var(--albulm-bg)';
      setTimeout(()=>{
          flipperRef.current.style.backgroundImage = 'var(--pnr-bg)';
          albulmRef.current.classList.add('hidden');
        }, 275)
      setTimeout(()=>{
        albulmRef.current.classList.add('hidden');
        pnrRef.current.classList.remove('hidden');
        flipperRef.current.classList.add('hidden');
        flipperRef.current.classList.remove('activeThumb');
      }, 550);
  }
  const flipperRef = useRef()
  const albulmRef = useRef()
  const pnrRef = useRef()
  const containerRef = useRef()

  return (
    <>
      <div 
        onMouseEnter={showPnr} 
        onMouseLeave ={showAlbulm}
        className={styles.container}
        ref={containerRef}
      >
        <div ref={albulmRef} className={styles.albulmImg}>
          <Image
            src={'/img/' + o.albulm.img + '200x200px.jpg'}
            fill={true}
            priority={true}
            alt={'albulm cover'}
          >
          </Image>
        </div>
        <div ref={pnrRef} className={`${styles.pnrImg} hidden`}>
          <Image
            src={'/img/' + o.img + '200x200px.webp'}
            fill={true}
            priority={true}
            alt={"PNR artwork"}
          >
          </Image>
        </div>
        <div 
          ref={flipperRef}
          className={`${styles.flipper} hidden`}
        >
        </div>
      </div>
    </>
  )
}
