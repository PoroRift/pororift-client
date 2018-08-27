import React, { Component } from 'react';
import '../index.css';

class Background extends Component {
  render() {
    return (



        <div className = "bg2">
          <img className = 'img2' src ={require('../images/PoroLogo.png')} />
          <div className = "text">
            ENTER SUMMONER NAME FOR CURRENT GAME OR USER STATS
          </div>
        </div>


    );
  }
}
export default Background;
