import React, { Component } from 'react';
import '../index.css';

class NavBar extends Component {
  clicked(){
    alert('Something is supposed to happen here.. heh.. ¯\\_(ツ)_/¯');
  }

  render() {
    return (
      <div id="topnav">
        <button id="topnavButton" onClick={this.clicked}>
          <img src={require('../images/s2.png')} alt="" />
        </button>
      </div>
    );
  }
}

export default NavBar;
