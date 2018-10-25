import React, { Component } from 'react';
import '../index.css';
import Icon from './Icon';

class Searchbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: ""
    };

    this.search = this.search.bind(this);
  }

  search(){
    alert('Something is supposed to happen here.. heh.. ¯\\_(ツ)_/¯');
  }
  
  render() {
    return (
      <div id="searchBox" style={style.searchBox}>
        <input
          type="text"
          placeholder="ENTER SUMMONER NAME"
          maxLength="16"
        />
        <button onClick={this.search}>
          <Icon icon="search" size="30" color="rgba(255,255,255,0.7)"/>
        </button>
      </div>
    );
  }
}

const style = {
  searchBox: {
    display: 'flex',
    alignItems: 'center'
  }
}

export default Searchbar;
