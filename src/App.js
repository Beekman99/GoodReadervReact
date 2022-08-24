import {useEffect, useState} from 'react';
import './App.css';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import Buy from './components/Buy/Buy';
import Author from './components/Author/Author'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import eyem from './imgs/eyem.svg';
import eyed from './imgs/eyed.svg';

function App() {

  const [locationState, setLocationState]= useState({
    location: null,
  });

  const [loadState, setLoadState] = useState({
    load: false,
  });

  const [questionState, setQuestionState]= useState(0)

  useEffect(function(){

  });

  return (
    <div className="App">
      <BrowserRouter>
      <Nav
        location = {locationState}
        setLocation = {setLocationState}
      />

        <Routes>
          <Route path="/buy" element={<Buy/>}/>
          <Route path="/author" element={<Author/>}/>
          <Route path="/" 
            element={<Home
              questionState={questionState}
              setQuestionState={setQuestionState}
            />} 
          />
        </Routes>
      </BrowserRouter>
      <div className="eyeContainer">
        <img src={eyem} alt="backgroundobserver" className="eyeM"/>
        <img src={eyed} alt="backgroundobserver" className="eyeD"/>
      </div>
    </div>
  );
}

export default App;
