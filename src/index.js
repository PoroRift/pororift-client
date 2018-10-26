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
          style={style.logo}
          src={require('./images/pororift-logo.png')}
          alt="PORORIFT Logo"
        />
        <p style={style.instruction}>ENTER SUMMONER NAME FOR CURRENT GAME OR USER STATS</p>
        <SearchBar inputWidth="300px" inputHeight="25px"/>
      </div>
    </Background>
	)
};

// Some more global styles are in index.html including a button style.
const style = {
  centerPiece: {
    marginTop: '25vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  instruction: {
    fontFamily: 'sans-serif',
    fontSize: '14px',
    color: 'white'
  },
  logo: {
    backgroundColor: 'rgba(0,0,0,0.45)',
    padding: '7px',
    marginBottom: '20px'
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
