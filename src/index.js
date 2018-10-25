import React from 'react';
import ReactDOM from 'react-dom';
import Background from './components/Background.js';
import SearchBar from './components/Searchbar.js';
import NavBar from './components/NavBar.js';
import './index.css';

const Index = () => {
  return(
    <Background imagePath="https://bit.ly/2MPhVLe">
      <NavBar />
      <div style={style.centerPiece}>
        <img
          src={require('./images/pororift-logo.png')}
          alt="PORORIFT Logo"
        />
        <p>ENTER SUMMONER NAME FOR CURRENT GAME OR USER STATS</p>
        <SearchBar style={style.searchBar}/>
      </div>
    </Background>
	)
};

const style = {
  centerPiece: {
    marginTop: '25vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchBar: {
    marginTop: '30px'
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
