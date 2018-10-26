import React, { Component } from 'react';
import Icon from './Icon';

class NavBar extends Component {
  clicked(){
    alert('Something is supposed to happen here.. heh.. ¯\\_(ツ)_/¯');
  }

  render() {
    return (
      <div style={style.navBar}>
        <button onClick={this.clicked}>
          <Icon icon="search" size="20" color="rgba(255,255,255,0.7)"/>
        </button>
      </div>
    );
  }
}

const style = {
  navBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.7)',
    height: '40px'
  }
}

export default NavBar;