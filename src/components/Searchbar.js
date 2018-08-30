import React, { Component } from 'react';
import '../index.css';

class Searchbar extends Component {
  clicked(){
    alert('Something is supposed to happen here.. heh.. ¯\\_(ツ)_/¯');
  }
  render() {
    return (
        <div id="Searchbar">
          <div id="searchBox">
            <input
              type="text"
              placeholder="ENTER SUMMONER NAME"
              maxLength="16"
            />
          </div>
          <div id="searchButtonBox">
            <button onClick={this.clicked}><img src={require('../images/s1.png')} alt = "" /></button>
          </div>
        </div>
    );
  }
}
export default Searchbar;
