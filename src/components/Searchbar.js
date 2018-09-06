import React, { Component } from 'react';
import '../index.css';

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
      <div id="searchBox">
        <input
          type="text"
          placeholder="ENTER SUMMONER NAME"
          maxLength="16"
        />
        <button onClick={this.search}>
          <img src={require('../images/search-icon.png')} alt = "" />
        </button>
      </div>
    );
  }
}

export default Searchbar;
