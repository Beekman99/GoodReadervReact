import styles from './Author.module.css';
import authorPic from './imgs/author.svg';
import Nav from '../Nav/Nav';
import {Helmet} from 'react-helmet';

function Author(){

  const schemaMarkup ={
    "@context": "https://schema.org/",
    "@type": "Person",
    "name": "M'Rone",
    "url": "http://areyouagoodreader.com/about-author",
    "image": "",
    "jobTitle": "Author",
    "worksFor": {
      "@type": "Organization",
      "name": "Self"
    }  
  }
  
  return(
    <>
    <Helmet>
      <title> About Author M'Rone </title>
      <meta name="description" content=" Little is known about M'Rone, the author of I Am A Good Reader..."/>
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>
    </Helmet>
    <Nav/>
    <div className={styles.author}>
      <img src={authorPic} alt="turtle face" className={styles.authorPic}/>
      <div className={styles.overlay}></div>
    </div>
    </>
  );
};

export default Author;