import {useEffect} from 'react';
import styles from './Home.module.css'
import goodreadingm from './imgs/goodreadingm.svg';
import goodreadingd from './imgs/goodreadingd.svg';
import smilem from './imgs/smilem.svg';
import smiled from './imgs/smiled.svg';
import areyoum from './imgs/areyoum.svg';
import areyoud from './imgs/areyoud.svg'

function Home(props){

  useEffect(function(){

    let time;

    if(props.questionState < 3){
      time = setTimeout(function(){
        props.setQuestionState(function(prev){
          return prev+1;
        })
      }, 3000)

    }else{
      clearTimeout(time)
    }
    return function(){clearTimeout(time);}; 
  }, [props.questionState])

  if(props.questionState == 0){
    return(
      <div className={styles.home}>
        <div className={styles.homeTopM}>
          <img src={goodreadingm} alt="greeting" />
        </div>
        <div className={styles.homeTopD}>
          <img src={goodreadingd} alt="greeting" />
        </div>
        <div className={styles.homeBottom}>
        </div>
      </div>
    )
  }else if(props.questionState == 1){
    return(
      <div className={styles.home}>
        <div className={styles.homeTopM}>
          <img src={smilem} alt="second-greeting" />
        </div>
        <div className={styles.homeTopD}>
          <img src={smiled} alt="second-greeting"/>
        </div>
        <div className={styles.homeBottom}>
        </div>
      </div>
    )
  }else if(props.questionState == 2){
    return(
      <div className={styles.home}>
        <div className={styles.homeTopMF}>
          <img src={areyoum} alt="third-greeting" />
        </div>
        <div className={styles.homeTopDF}>
          <img src={areyoud} alt="third-greeting"/>
        </div>
        <div className={styles.homeBottom}>
        </div>
      </div>
    )
  }else{
    return(
      <div className={styles.home}>
        <div className={styles.homeTopMF}>
          <img src={areyoum} alt="third-greeting" />
        </div>
        <div className={styles.homeTopDF}>
          <img src={areyoud} alt="third-greeting"/>
        </div>
        <div className={styles.homeBottom}>
          <div className={styles.btnContainer}>
            <button className={styles.yes}>
              Yes
            </button>
          </div>
          <div className={styles.btnContainer}>
            <button className={styles.no}>
              No
            </button>
          </div>
        </div>
      </div>
    )
  }

};

export default Home;