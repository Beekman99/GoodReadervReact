import {useState} from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Nav.module.css';

function Nav(){

  const [navState, setNavState] = useState('home')

  const [barState, setBarState] = useState(true)

  function toggleBar(){
    setBarState(function(prev){
      return !prev
    })
  }

  if(!barState){
    return(
      <>
      <nav className={styles.navD}>
        <ul className={styles.navListD}>
          <li key="0d">
            <NavLink to="/" className={({isActive})=> isActive ? styles.homeBtnDS : styles.homeBtnD}>
              Home
            </NavLink>
          </li>
          <li key="1d">
            <NavLink to="/author" className={({isActive})=> isActive ? styles.authorBtnDS : styles.authorBtnD}>
              Author
            </NavLink>
          </li>
          <li key="2d">
            <NavLink to="/buy" className={({isActive})=> isActive ? styles.buyBtnDS : styles.buyBtnD}>
              Buy
            </NavLink>
          </li>
        </ul>
      </nav>
      <nav className={styles.navMX}>
          {/* <input type="checkbox" id="menuToggle"/> */}
          <button className={styles.burgermenuX} onClick={toggleBar}>
            <div></div>
          </button>
          <ul className={styles.navListMX}>
          <li key="0m">
            <NavLink to="/" className={({isActive})=> isActive ? styles.homeBtnMS : styles.homeBtnM}>
              Home
            </NavLink>
          </li>
          <li key="1m">
            <NavLink to="/author" className={({isActive})=> isActive ? styles.authorBtnMS : styles.authorBtnM}>
              Author
            </NavLink>
          </li>
          <li key="2m">
            <NavLink to="/buy" className={({isActive})=> isActive ? styles.buyBtnMS : styles.buyBtnM}>
              Buy
            </NavLink>
          </li>
        </ul>
      </nav>
      </>
    )
  }else if(barState){
    return(
      <>
      <nav className={styles.navD}>
        <ul className={styles.navListD}>
          <li key="0d">
            <NavLink to="/" className={({isActive})=> isActive ? styles.homeBtnDS : styles.homeBtnD}>
              Home
            </NavLink>
          </li>
          <li key="1d">
            <NavLink to="/author" className={({isActive})=> isActive ? styles.authorBtnDS : styles.authorBtnD}>
              Author
            </NavLink>
          </li>
          <li key="2d">
            <NavLink to="/buy" className={({isActive})=> isActive ? styles.buyBtnDS : styles.buyBtnD}>
              Buy
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={styles.menuOverlayM}></div>
      <nav className={styles.navM}>
          <button className={styles.burgermenu} onClick={toggleBar}>
            <div></div>
          </button>
          <ul className={styles.navListM}>
          <li key="0m">
            <NavLink to="/" className={({isActive})=> isActive ? styles.homeBtnMS : styles.homeBtnM} onClick={toggleBar}>
              Home
            </NavLink>
          </li>
          <li key="1m">
            <NavLink to="/author" className={({isActive})=> isActive ? styles.authorBtnMS : styles.authorBtnM} onClick={toggleBar}>
              Author
            </NavLink>
          </li>
          <li key="2m">
            <NavLink to="/buy" className={({isActive})=> isActive ? styles.buyBtnMS : styles.buyBtnM} onClick={toggleBar}>
              Buy
            </NavLink>
          </li>
        </ul>
      </nav>
      </>
    )
  }
  
};

export default Nav;