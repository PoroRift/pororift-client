import React from 'react';
import ReactDOM from 'react-dom';
import Background from './components/Background.js';
import Searchbar from './components/Searchbar.js';
import NavBar from './components/NavBar.js';
import './index.css';

const Index = () => {
  return(
    <Background imagePath="https://bit.ly/2MPhVLe">
      <NavBar />
      <div style={style.centerpeice}>
        <img
          src={require('./images/pororift-logo.png')}
          alt="PORORIFT Logo"
        />
        <p>ENTER SUMMONER NAME FOR CURRENT GAME OR USER STATS</p>
        <Searchbar />
      </div>
    </Background>
	)
};

const style = {
  centerpeice: {
    marginTop: '25vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
