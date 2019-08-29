import React from 'react';
import TextView from './TextView';
import './App.module.sass';

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomChar = () => String.fromCharCode(getRandomInt(97, 122));

const getRandomWord = () =>
  Array(getRandomInt(5, 10))
    .fill()
    .map(() => getRandomChar());

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: getRandomWord(),
    };
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState(state => state);
          }}
        >
          Pass the same prop
        </button>
        <button
          onClick={() => {
            this.setState(state => ({ ...state, word: getRandomWord() }));
          }}
        >
          Pass a different prop
        </button>
        <TextView text={this.state.word} />
      </div>
    );
  }
}

export default App;
