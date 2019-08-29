import React from 'react';
import TextView from '/components/TextView';
import './App.module.sass';
import { getRandomWord } from '/utils';

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
