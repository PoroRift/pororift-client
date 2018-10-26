import React, { Component } from 'react';
import Icon from './Icon';

class SearchBar extends Component {
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
    const { inputWidth, inputHeight } = this.props;

    return (
      <div style={this.props.style}>
        <div style={style.searchBox}>
          <input
            style={{ width: inputWidth, height: inputHeight }}
            type="text"
            placeholder="ENTER SUMMONER NAME"
            maxLength="30"
          />
          <button onClick={this.search} style={style.searchButton}>
            <Icon icon="search" size="28" color="rgba(255,255,255,0.7)"/>
          </button>
        </div>
      </div>
    );
  }
}

const style = {
  searchBox: {
    display: 'flex',
    alignItems: 'center'
  },
  searchButton: {
    marginLeft: '5px'
  }
}

export default SearchBar;
