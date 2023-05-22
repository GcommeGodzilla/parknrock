import Image from 'next/image'
import styles from '../styles/Thumb.module.css'
import { useRef } from 'react'

export default function Thumb({o}) {

  let flipperRef = useRef();
  let albulmRef = useRef();
  let pnrRef = useRef();
  let containerRef = useRef();
  
  var pnrBg = "url('/img/" + o.img + ".200x200px.webp')";
  var albulmBg = "url('/img/" + o.albulm.img + ".200x200px.jpg')";

  const showAlbulm = function() {
    albulmRef.current.classList.add('hidden');
    pnrRef.current.classList.add('hidden');
    flipperRef.current.classList.remove('hidden');
    flipperRef.current.classList.add('activeThumb');
    flipperRef.current.style.backgroundImage = pnrBg;
    setTimeout(()=>{
      flipperRef.current.style.backgroundImage = albulmBg;
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
  flipperRef.current.style.backgroundImage = albulmBg;
  setTimeout(()=>{
    flipperRef.current.style.backgroundImage = pnrBg;
    albulmRef.current.classList.add('hidden');
  }, 275)
  setTimeout(()=>{
    albulmRef.current.classList.add('hidden');
    pnrRef.current.classList.remove('hidden');
    flipperRef.current.classList.add('hidden');
    flipperRef.current.classList.remove('activeThumb');
  }, 550);
}

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
            src={'/img/' + o.albulm.img + '.200x200px.jpg'}
            fill={true}
            priority={true}
            alt={'albulm cover'}
            sizes="(orientation : portrait) 18dvw, (orientation : landscape) 18dvh"
          >
          </Image>
        </div>
        <div ref={pnrRef} className={`${styles.pnrImg} hidden`}>
          <Image
            src={'/img/' + o.img + '.200x200px.webp'}
            fill={true}
            priority={true}
            alt={"PNR artwork"}
            sizes="(orientation : portrait) 18dvw, (orientation : landscape) 18dvh"
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
