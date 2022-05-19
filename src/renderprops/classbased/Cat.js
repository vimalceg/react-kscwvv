import React from 'react';

export default class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img
        src="https://cdn.vectorstock.com/i/1000x1000/62/82/cat-icon-vector-10786282.webp"
        style={{
          position: 'absolute',
          left: mouse.x,
          top: mouse.y,
          width: '50px',
          height: '50px',
        }}
      />
    );
  }
}
