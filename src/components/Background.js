import React from 'react';
import '../index.css';

const Background = (props) => {
  return (
    <div className="fullscreen" style={{ backgroundColor: props.color, backgroundImage: 'url(' + props.imagePath + ')' }}>
      {props.children}
    </div>
  );
}

export default Background;