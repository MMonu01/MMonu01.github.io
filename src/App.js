import logo from './logo.svg';
import './App.css';
import Home from './Home';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

function App() {


  

  const topFunction = ()=> {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    console.log("nothing is happening")
  }


  return (
    <>
    <button onClick={topFunction} id="myBtn"  title="Go to top">
    <FontAwesomeIcon style={{fontWeight:"bolder",fontSize:"22px"}} icon={faChevronUp}/>
    </button>
    <div className="App" style={{position:"relative"}}>
  <Home/>
    </div>
    </>
  );
}

export default App;
