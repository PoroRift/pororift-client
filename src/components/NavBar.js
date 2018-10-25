import React, { Component } from 'react';
import '../index.css';

class NavBar extends Component {
  clicked(){
    alert('Something is supposed to happen here.. heh.. ¯\\_(ツ)_/¯');
  }

  render() {
    return (
      <div style={style.navbar}>
        <button id="topnavButton" onClick={this.clicked}>
          <img src={require('../images/s2.png')} alt="" style={style.icon}/>
        </button>
      </div>
    );
  }
}

const style = {
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.7)',
    height: '40px'
  },
  icon: { // Can make into a component with size prop.
    width: '25px',
    height: '25px'
  }
}

export default NavBar;