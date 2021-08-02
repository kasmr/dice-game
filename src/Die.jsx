import React, { Component } from 'react';

export default class Die extends Component {
  render() {
    return (
      <i
        style={{ fontSize: '10rem', color: '#E32636' }}
        className={
          this.props.isThrown
            ? `dice fa fa-dice-${this.props.diceNumber}`
            : `fa fa-dice-${this.props.diceNumber}`
        }
        aria-hidden='true'
      ></i>
    );
  }
}
