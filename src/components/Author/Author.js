import styles from './Author.module.css'
import authorPic from './imgs/author.svg'

function Author(){
  return(
    <div class={styles.author}>
      <img src={authorPic} alt="turtle face" className={styles.authorPic}/>
      <div class={styles.overlay}></div>
  </div>
  )
};

export default Author;