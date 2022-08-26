import {useEffect} from 'react';
import {Link} from 'react-router-dom'
import styles from './Home.module.css'
import goodreadingm from './imgs/goodreadingm.svg';
import goodreadingd from './imgs/goodreadingd.svg';
import smilem from './imgs/smilem.svg';
import smiled from './imgs/smiled.svg';
import areyoum from './imgs/areyoum.svg';
import areyoud from './imgs/areyoud.svg';
import eyem from './imgs/eyem.svg';
import eyed from './imgs/eyed.svg';
import NavHome from '../NavHome/NavHome';
import Nav from '../Nav/Nav';
import {Helmet} from 'react-helmet';

function Home(props){

  function yesUrl(){
    const yesList = [
      "https://www.alternet.org/",
      "https://abcnews.go.com/",
      "https://apnews.com/",
      "https://www.bloomberg.com/",
      "https://www.buzzfeednews.com/",
      "https://www.cbsnews.com/",
      "https://www.cnn.com/",
      "https://www.thedailybeast.com/",
      "https://www.democracynow.org/",
      "https://www.forbes.com/",
      "https://www.foxnews.com/",
      "https://www.nytimes.com/",
      "https://www.reuters.com/",
      "https://www.usatoday.com/",
      "https://www.economist.com/",
      "https://www.newyorker.com/",
      "https://bostonreview.net/",
      "https://www.bridgealliance.us/",
      "https://calwatchdog.com/",
      "https://www.cbn.com/",
      "https://www.cnet.com/",
      "https://www.wiscnews.com/bdc/",
      "https://www.defenseone.com/",
      "https://fee.org/",
      "https://foreignpolicy.com/",
      "https://freedomhouse.org/",
      "https://freakonomics.com/",
      "https://gizmodo.com/",
      "https://hamptonroadsmessenger.com/",
      "https://heavy.com/",
      "https://www.ibtimes.com/",
      "https://www.justfacts.com/",
      "https://www.latinorebels.com/",
      "https://www.presstelegram.com/",
      "https://www.livescience.com/",
      "https://justthenews.com/",
      "https://www.kalw.org/",
      "https://katu.com/",
      "https://www.intellectualconservative.com/",
      "https://www.indystar.com/",
      "https://www.indeonline.com/",
      "https://ijr.com/",
      "https://www.idsnews.com/",
      "https://www.idahostatesman.com/",
      "https://www.huffpost.com/",
      "https://www.chron.com/",
      "https://hotair.com/",
      "https://www.civilbeat.org/",
      "https://hiplatina.com/",
      "https://hightimes.com/",
      "https://www.heralddemocrat.com/",
      "https://heavy.com/",
      "https://www.hbs.edu/",
      "https://www.haaretz.com/",
      "https://grist.org/",
      "https://www.gq.com/",
      "https://www.gao.gov/",
      "https://www.gop.gov/",
      "https://news.google.com/",
      "https://www.golocalprov.com/",
      "https://www.glaad.org/",
      "https://www.gallup.com/home.aspx",
      "https://www.frontpagemag.com/",
      "https://www.foxbusiness.com/",
      "https://fortune.com/",
      "https://www.thefiscaltimes.com/",
      "https://firstdraftnews.org/",
      "https://www.ft.com/",
      "https://www.eurekalert.org/",
      "https://www.esquire.com/",
      "https://erraticus.co/",
      "https://www.espn.com/",
      "https://www.edf.org/",
      "https://www.elle.com/",
      "https://www.eastbaytimes.com/",
      "https://www.drudgereport.com/",
      "https://www.dailykos.com/",
      "https://dailynorthwestern.com/",
      "https://www.dailypress.com/",
      "https://cuindependent.com/",
      "https://www.currentaffairs.org/",
      "https://cookpolitical.com/",
      "https://www.commentary.org/",
      "https://www.coffeepartyusa.com/",
      "https://www.city-journal.org/",
      "https://www.chicagotribune.com/",
      "https://chicago.suntimes.com/",
      "https://www.cbpp.org/",
      "https://csbaonline.org/",
      "https://publicintegrity.org/",
      "https://www.americanprogress.org/",
      "https://www.cato.org/",
      "https://www.brookings.edu/",
      "https://brownstone.org/",
      "https://www.blackenterprise.com/",
      "https://www.breitbart.com/",
      "https://www.axios.com/",
      "https://www.bbc.com/news",
      "https://www.csmonitor.com/",
      "https://www.newsweek.com/",
      "https://time.com/"
    ];

    const rand = Math.floor(Math.random()*yesList.length);
    window.open(`${yesList[rand]}`,'_blank');

  };

  useEffect(function(){

    let time;

    if(props.questionState < 4){
      time = setTimeout(function(){
        props.setQuestionState(function(prev){
          return prev+0.5;
        });
      }, 1500);

    }else{
      clearTimeout(time);
    };
    return function(){clearTimeout(time);}; 
  }, [props.questionState]);

  if(props.questionState >= 0 && props.questionState < 1){
    return(
      <>
      <Helmet>
        <title>"I Am A Good Reader" Explosive Political Sci-fi Novel by M'Rone</title>
        <meta name="description" content="Why do you believe everything you read? The subversive political fiction sci-fi book for dystopian lovers who know they already live in a dystopian nightmare, I Am A Good Reader is the rollercoaster fight-back against those who want one thing: for you to be a Good Reader." />
      </Helmet>
      <div className={styles.home}>
        <div className={styles.homeTopM}>
          <img src={goodreadingm} alt="greeting" className={styles.goodreading}/>
        </div>
        <div className={styles.homeTopD}>
          <img src={goodreadingd} alt="greeting" className={styles.goodreading}/>
        </div>
        <div className={styles.homeBottom}>
        </div>
      </div>
      <div className={styles.eyeContainer}>
            <img src={eyem} alt="backgroundobserver" className={styles.eyeM}/>
            <img src={eyed} alt="backgroundobserver" className={styles.eyeD}/>
      </div>
      </>
    );
  }else if(props.questionState >= 1 && props.questionState < 2){
    return(
      <>
      <Helmet>
        <title>"I Am A Good Reader" Explosive Political Sci-fi Novel by M'Rone</title>
        <meta name="description" content="Why do you believe everything you read? The subversive political fiction sci-fi book for dystopian lovers who know they already live in a dystopian nightmare, I Am A Good Reader is the rollercoaster fight-back against those who want one thing: for you to be a Good Reader." />
      </Helmet>
      <div className={styles.home}>
        <div className={styles.homeTopM}>
          <img src={smilem} alt="second-greeting" className={styles.smile}/>
        </div>
        <div className={styles.homeTopD}>
          <img src={smiled} alt="second-greeting" className={styles.smile}/>
        </div>
        <div className={styles.homeBottom}>
        </div>
      </div>
      <div className={styles.eyeContainer}>
            <img src={eyem} alt="backgroundobserver" className={styles.eyeM}/>
            <img src={eyed} alt="backgroundobserver" className={styles.eyeD}/>
      </div>
      </>
    );
  }else if(props.questionState >= 2 && props.questionState < 3.5){
    return(
      <>
      <Helmet>
        <title>"I Am A Good Reader" Explosive Political Sci-fi Novel by M'Rone</title>
        <meta name="description" content="Why do you believe everything you read? The subversive political fiction sci-fi book for dystopian lovers who know they already live in a dystopian nightmare, I Am A Good Reader is the rollercoaster fight-back against those who want one thing: for you to be a Good Reader." />
      </Helmet>
      <NavHome/>
      <div className={styles.home}>
        <div className={styles.homeTopMF}>
          <img src={areyoum} alt="third-greeting" className={styles.areyou}/>
        </div>
        <div className={styles.homeTopDF}>
          <img src={areyoud} alt="third-greeting" className={styles.areyou}/>
        </div>
        <div className={styles.homeBottomM}>
          <div className={styles.btnContainer}>
            <button className={styles.yes} onClick={yesUrl}>
              Yes
            </button>
          </div>
          <div className={styles.btnContainer}>
            <Link to="/buy" className={styles.no}>
              No
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.eyeContainer}>
            <img src={eyem} alt="backgroundobserver" className={styles.eyeM}/>
            <img src={eyed} alt="backgroundobserver" className={styles.eyeD}/>
      </div>
      </>
    );
  }else{
    return(
      <>
      <Helmet>
        <title>"I Am A Good Reader" Explosive Political Sci-fi Novel by M'Rone</title>
        <meta name="description" content="Why do you believe everything you read? The subversive political fiction sci-fi book for dystopian lovers who know they already live in a dystopian nightmare, I Am A Good Reader is the rollercoaster fight-back against those who want one thing: for you to be a Good Reader." />
      </Helmet>
      <Nav/>
      <div className={styles.home}>
        <div className={styles.homeTopMStable}>
          <img src={areyoum} alt="third-greeting" className={styles.areyou}/>
        </div>
        <div className={styles.homeTopDStable}>
          <img src={areyoud} alt="third-greeting" className={styles.areyou}/>
        </div>
        <div className={styles.homeBottomM}>
          <div className={styles.btnContainerStable}>
            <button className={styles.yes} onClick={yesUrl}>
              Yes
            </button>
          </div>
          <div className={styles.btnContainerStable}>
            <Link to="/buy" className={styles.no}>
              No
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.eyeContainer}>
            <img src={eyem} alt="backgroundobserver" className={styles.eyeM}/>
            <img src={eyed} alt="backgroundobserver" className={styles.eyeD}/>
      </div>
      </>
    );
  };
};

export default Home;