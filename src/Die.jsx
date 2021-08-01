import React, { Component } from 'react';

export default class Die extends Component {
  render() {
    return (
      <div>
        <i
          style={{ fontSize: '10rem', color: '#95bddc' }}
          className={`fa fa-dice-${this.props.diceNumber}`}
          aria-hidden='true'
        ></i>
      </div>
    );
  }
}
