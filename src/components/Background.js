import React from 'react';
import '../index.css';

const Background = (props) => {
  return (
    <div id="logoBackground">
      {props.children}
    </div>
  );
}

export default Background;