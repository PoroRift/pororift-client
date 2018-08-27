import React, { Component } from 'react';
import '../index.css';

class Searchbar extends Component {
  clicked(){
    alert('Something is supposed to happen here.. heh.. ¯\\_(ツ)_/¯');
  }
  render() {

    return (


        <div className = "Searchbar">
        <div className = "box">
        <input type = "text" placeholder = "ENTER SUMMONER NAME" maxlength = "16"></input>

        </div>
        <div className = 'box2'>
        <button className = 'btn2' onClick= {this.clicked}><img src ={require('../images/s1.png')} /></button>

        </div>

        </div>


    );
  }
}
export default Searchbar;
