import React, { Component } from 'react';
import Die from './Die';

export default class DicesTable extends Component {
  constructor(props) {
    super(props);
    this.state = { dice1: 'one', dice2: 'one', isThrown: false };
  }

  diceNumbers = ['one', 'two', 'three', 'four', 'five', 'six'];

  getRandomNumbers = () => {
    this.setState({ isThrown: true });
    setTimeout(() => {
      let numberForDice1 =
        this.diceNumbers[Math.floor(Math.random() * this.diceNumbers.length)];
      let numberForDice2 =
        this.diceNumbers[Math.floor(Math.random() * this.diceNumbers.length)];
      this.setState({
        dice1: numberForDice1,
        dice2: numberForDice2,
        isThrown: false,
      });
    }, 3000);
  };

  render() {
    return (
      <>
        <div className='dicesTable'>
          <Die diceNumber={this.state.dice1} isThrown={this.state.isThrown} />
          <Die diceNumber={this.state.dice2} isThrown={this.state.isThrown} />
        </div>
        {!this.state.isThrown ? (
          <button onClick={this.getRandomNumbers}>Roll the dices!</button>
        ) : (
          <button disabled={true}>Rolling...</button>
        )}
      </>
    );
  }
}
