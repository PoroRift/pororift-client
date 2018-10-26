import React from 'react';
import ReactDOM from 'react-dom';
import Background from './components/Background';
import SearchBar from './components/Searchbar';
import NavBar from './components/NavBar';

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
        <SearchBar style={style.searchBar} inputWidth="300px" inputHeight="25px"/>
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
