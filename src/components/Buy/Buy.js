import styles from './Buy.module.css'
import cover from './imgs/cover.svg'
import NavBuy from '../NavBuy/NavBuy';
import {Helmet} from 'react-helmet'

function Buy(){

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Book",
    "aggregateRating": {
      "@type": "AggregateRating",
      "reviewCount": "0"
    },
    "bookFormat": "EBook",
    "copyrightHolder": {
      "@type": "Organization",
      "name": "BookBaby"
    },
    "copyrightYear": "2022",
    "description": "Why do you believe everything you read? The subversive political fiction sci-fi book for dystopian lovers who know they already live in a dystopian nightmare, I Am A Good Reader is the rollercoaster fight-back against those who want one thing: for you to be a Good Reader.",
    "genre": "Science Fiction",
    "inLanguage": "en-US",
    "isFamilyFriendly": "true",
    "isbn": "9781667844619",
    "name": "I am a good reader",
    "numberOfPages": "366",
    "publisher": {
      "@type": "Organization",
      "name": "BookBaby"
    }
  }
  

  return(
    <>
    <Helmet>
      <title>Purchase "I AM A Good Reader" Sci-fi Novel on Amazon or Barnes & Noble</title>
      <meta name="description" content="Buy the digital novel for your tablet or smart phone, on Amazon or Barnes & Noble."/>
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>
    </Helmet>
    <NavBuy/>
    <div className={styles.purchasePageD}>
      <div className={styles.purchaseSectionD}> 
        <div className={styles.purchaseSDTop}>
          <div className={styles.purchaseSDTopLeft}>
            <img src={cover} alt="bookcover" className={styles.coverD}/>
          </div>
          <div className={styles.purchaseSDTopRight}>
            <div className={styles.authorDesc}>
              <p className={styles.titleD}>I am a good reader</p>
              <p className={styles.authorD}>By M'Rone</p>
            </div>
            <div className={styles.purchaseLinksD}>
              <p className={styles.purchaseOnD}>Purchase on</p>
              <a href="https://www.amazon.com/gp/product/B09ZD6VN4W/" target="_blank" className={styles.purchaseLinkD}>
                Amazon
              </a>
              <a href="https://www.barnesandnoble.com/w/i-am-a-good-reader-mrone/1141413149" target="_blank" className={styles.purchaseLinkD}>
                Barnes & Noble
              </a>
            </div>
          </div>
  
        </div>
        <div className={styles.purchaseSDBottom}>
          <p className={styles.synopsisD}>Synopsis</p>
          <p className={styles.synopsisTextD}>I Am A Good Reader is the story about fighting back against the unseen forces that manipulate, coerce, influence, divide and pick you off one-by-one with each and every word you see. This is your story; you are in the fight of your life against those hellbent to make you believe what you read. Are you a good reader? Resist.</p>
        </div>
      </div>
    </div>
    <div className={styles.purchasePageM}>
      <div className={styles.coverContainerM}>
        <img src={cover} alt="bookcover" className={styles.coverM}/>
      </div>
      <div className={styles.authorDesc}>
        <p className={styles.titleM}>I am a good reader</p>
        <p className={styles.authorM}>By M'Rone</p>
      </div>
      <div className={styles.purchaseLinksM}>
        <p className={styles.purchaseOnM}>Purchase On</p>
        <a href="https://www.amazon.com/gp/product/B09ZD6VN4W/" target="_blank" className={styles.purchaseLinkM}>
          Amazon
        </a>
        <a href="https://www.barnesandnoble.com/w/i-am-a-good-reader-mrone/1141413149" target="_blank" className={styles.purchaseLinkM}>
          Barnes & Noble
        </a>
      </div>
      <div className={styles.synopsisM}>
        <div className={styles.synopsisTitleM}>
          <p className={styles.synopsisDescM}>Synopsis</p>
          {/* <div className={styles.chevronContainer}>
            <a href="#synopsisTextM">
              <img src="/imgs/chevrondown.svg" alt="expandsynopsis" id="chevrondown"/>
            </a>
            <a href="#coverContainerM">
              <img src="/imgs/chevronup.svg" alt="expandsynopsis" id="chevronup" class="hidden"/>
            </a>
                 
          </div> */}
        </div>
        <p  className={styles.synopsisTextM}>
          I Am A Good Reader is the story about fighting back against the unseen forces that manipulate, coerce, influence, divide and pick you off one-by-one with each and every word you see. This is your story; you are in the fight of your life against those hellbent to make you believe what you read. Are you a good reader? Resist.
        </p>
      </div>
    </div>
  </>
  )
}

export default Buy;