import React, { Component } from 'react';
import Die from './Die';

export default class DicesTable extends Component {
  constructor(props) {
    super(props);
    this.state = { dice1: 'one', dice2: 'one' };
  }

  getRandomNumbers = () => {
    let numberFordice1 = Math.floor(Math.random() * 6);
    let numberFordice2 = Math.floor(Math.random() * 6); //????
  };

  render() {
    return (
      <>
        <div className='dicesTable'>
          <Die diceNumber={this.state.dice1} />
          <Die diceNumber={this.state.dice2} />
        </div>
        <button>CLick me</button>
      </>
    );
  }
}
