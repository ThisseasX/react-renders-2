import React from 'react';

const getRandomColor = () =>
  '#' + ((Math.random() * 0xffffff) << 0).toString(16);

class TextView extends React.Component {
  render() {
    return <h1 style={{ color: getRandomColor() }}>{this.props.text}</h1>;
  }
}

export default TextView;
