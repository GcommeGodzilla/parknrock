import styles from "../styles/Artiste.module.css";

export default function Artiste({ nom, link, pays }) {
  return (
    <p className={styles.item}>
      <a href={link} target="blank">{nom}</a> 
      <span className={styles.slashicon}>
        <span>/</span>
        <span>/</span>
        <span>/</span>
      </span>
      [<span className={styles.pays}>{pays}</span>]
    </p>    
  );
}