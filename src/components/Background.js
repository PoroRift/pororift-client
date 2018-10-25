import React from 'react';

const Background = (props) => {
  const { color, imagePath } = props;
  return (
    <div className="fullscreen" style={{ backgroundColor: color, backgroundImage: 'url(' + imagePath + ')' }}>
      {props.children}
    </div>
  );
}

export default Background;