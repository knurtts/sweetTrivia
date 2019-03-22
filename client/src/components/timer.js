import React, { Component } from 'react';
import CountDown from 'react-countdown-clock';

class CountDownTest extends Component {
  constructor() {
    super()
    this.state = {
      completions: 0
    }
  }

  onComplete = () => {
    this.setState(
      {
        completions: this.state.completions + 1
      },
      () => console.log('completions', this.state.completions)
    )
  }

  render() {
    return (
      <div>
        <CountDown
          key={this.state.completions}
          seconds={20}
          color="#FF5200"
          alpha={0.9}
          size={100}
          onComplete={this.onComplete}
        />
      </div>
    )
  }
}

export default CountDownTest