import React from 'react';
import ReactDOM from 'react-dom';
import Background from './components/Background.js';
import Searchbar from './components/Searchbar.js';
import NavBar from './components/NavBar.js';
import './index.css';

const Index = () => {
  return(
    <div className= "index">
      <Background>
        <img
          id="logo"
          src={require('./images/pororift-logo.png')}
          alt="PORORIFT Logo"
        />
        <div className="text">ENTER SUMMONER NAME FOR CURRENT GAME OR USER STATS</div>
      </Background>
      <NavBar />
      <Searchbar />
    </div>
	)
};

ReactDOM.render(<Index />, document.getElementById('index'));
