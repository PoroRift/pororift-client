import React, { Component } from 'react';
import '../index.css';

const Background=(props)=>{
    return (
      <div id="logoBackground">
        <img
          id='logo'
          src={require('../images/PoroLogo.png')}
          alt = ""
        />
      <div className="text">
        ENTER SUMMONER NAME FOR CURRENT GAME OR USER STATS
      </div>
    </div>
    );
  }

  export{Background}
