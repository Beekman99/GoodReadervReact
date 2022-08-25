import {useEffect, useState} from 'react';
import './App.css';
import Home from './components/Home/Home';
import Buy from './components/Buy/Buy';
import Author from './components/Author/Author'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

function App() {

  const [questionState, setQuestionState]= useState(0)

  useEffect(function(){

  });

  return (
    <div className="App">
      <BrowserRouter>
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
    </div>
  );
}

export default App;
