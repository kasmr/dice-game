import React, { Component } from 'react';
import Die from './Die';

export default class DicesTable extends Component {
  constructor(props) {
    super(props);
    this.state = { dice1: 'one', dice2: 'one' };
  }

  diceNumbers = ['one', 'two', 'three', 'four', 'five', 'six'];

  getRandomNumbers = () => {
    let numberForDice1 =
      this.diceNumbers[Math.floor(Math.random() * this.diceNumbers.length)];
    let numberForDice2 =
      this.diceNumbers[Math.floor(Math.random() * this.diceNumbers.length)];
    this.setState({ dice1: numberForDice1, dice2: numberForDice2 });
    console.log(this.state.dice1, this.state.dice2);
  };

  render() {
    return (
      <>
        <div className='dicesTable'>
          <Die diceNumber={this.state.dice1} />
          <Die diceNumber={this.state.dice2} />
        </div>
        <button onClick={this.getRandomNumbers}>CLick me</button>
      </>
    );
  }
}
