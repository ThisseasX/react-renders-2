import React from 'react';
import { getRandomColor } from '/utils';

class TextView extends React.Component {
  render() {
    return <h1 style={{ color: getRandomColor() }}>{this.props.text}</h1>;
  }
}

export default TextView;
