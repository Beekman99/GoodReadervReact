import styles from './Author.module.css'
import authorPic from './imgs/author.svg'
import Nav from '../Nav/Nav';

function Author(){
  return(
    <>
    <Nav/>
    <div class={styles.author}>
      <img src={authorPic} alt="turtle face" className={styles.authorPic}/>
      <div class={styles.overlay}></div>
    </div>
    </>
  )
};

export default Author;