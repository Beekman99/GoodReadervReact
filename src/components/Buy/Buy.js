import styles from './Buy.module.css'

function Buy(){
  return(
    <div>
    <div className={styles.purchasePageD}>
      <div className="purchaseSectionD"> 
        <div class="purchaseSDTop">
          <div class="purchaseSDTopLeft">
            <img src="/imgs/cover.svg" alt="bookcover" id="coverD"/>
          </div>
          <div class="purchaseSDTopRight">
            <div class="authorDesc">
              <p id="titleD">I am a good reader</p>
              <p id="authorD">By M'Rone</p>
            </div>
            <div class="purchaseLinksD center">
              <p id="purchaseOnD">Purchase on</p>
              <a href="https://www.amazon.com/gp/product/B09ZD6VN4W/" target="_blank" class="purchaseLinkD">
                Amazon
              </a>
              <a href="https://www.barnesandnoble.com/w/i-am-a-good-reader-mrone/1141413149" target="_blank" class="purchaseLinkD">
                Barnes & Noble
              </a>
            </div>
          </div>
  
        </div>
        <div class="purchaseSDBottom">
          <p id="synopsisD">Synopsis</p>
          <p id="synopsisTextD">I Am A Good Reader is the story about fighting back against the unseen forces that manipulate, coerce, influence, divide and pick you off one-by-one with each and every word you see. This is your story; you are in the fight of your life against those hellbent to make you believe what you read. Are you a good reader? Resist.</p>
        </div>
      </div>
    </div>
    <div className={styles.purchasePageM}>
      <div class="coverContainerM center" id="coverContainerM">
        <img src="/imgs/cover.svg" alt="bookcover" id="coverM"/>
      </div>
      <div class="authorDesc">
        <p id="titleM">I am a good reader</p>
        <p id="authorM">By M'Rone</p>
      </div>
      <div class="purchaseLinksM center">
        <p id="purchaseOnM">Purchase On</p>
        <a href="https://www.amazon.com/gp/product/B09ZD6VN4W/" target="_blank" class="purchaseLinkM">
          Amazon
        </a>
        <a href="https://www.barnesandnoble.com/w/i-am-a-good-reader-mrone/1141413149" target="_blank" class="purchaseLinkM">
          Barnes & Noble
        </a>
      </div>
      <div class="synopsisM">
        <div class="synopsisTitleM">
          <p id="synopsisDescM">Synopsis</p>
          <div class="chevronContainer">
            <a href="#synopsisTextM">
              <img src="/imgs/chevrondown.svg" alt="expandsynopsis" id="chevrondown"/>
            </a>
            <a href="#coverContainerM">
              <img src="/imgs/chevronup.svg" alt="expandsynopsis" id="chevronup" class="hidden"/>
            </a>
                 
          </div>
        </div>
        <p class="hidden" id="synopsisTextM">
          I Am A Good Reader is the story about fighting back against the unseen forces that manipulate, coerce, influence, divide and pick you off one-by-one with each and every word you see. This is your story; you are in the fight of your life against those hellbent to make you believe what you read. Are you a good reader? Resist.
        </p>
      </div>
    </div>
  </div>
  )
}

export default Buy;