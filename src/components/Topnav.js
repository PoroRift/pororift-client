import React, { Component } from 'react';
import '../index.css';

class Topnav extends Component {
  render() {
    return (
      <div className = "topnav">
      <button className = 'btn' onClick= {this.clicked}><img src ={require('../images/s2.png')} /></button>
      </div>
    );
  }
}
export default Topnav;
