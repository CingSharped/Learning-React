import React from 'react'

class Timer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {time: 0, timeLimit: 10, timerOn: false};
      this.setTimeLimit.bind(this);
      this.toggleTimer.bind(this);
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        time: this.state.time >= this.state.timeLimit ? 0 : this.state.time + 1
      });
    }

    setTimeLimit(limit) {
        this.setState({
            timeLimit: limit
        })
    }

    toggleTimer() {
      this.setState({
        timerOn: !this.state.timerOn,
        time: 0
      })
    }
  
    render() {
      return (
        <div className='timerDisplay'>
          <h5>Your timer is {this.state.timeLimit} seconds {this.state.timerOn ?  "On" : "Off"}</h5>
          <h2>{this.state.timerOn ? this.state.time : "0"}</h2>
          <button className='button' type='button' onClick={() => this.toggleTimer()}>{this.state.timerOn ? "Stop Timer" : "Start Timer"}</button>
          <button className='button' type='button' onClick={() => this.setTimeLimit(40)}>40</button>
          <button className='button' type='button' onClick={() => this.setTimeLimit(50)}>50</button>
          <button className='button' type='button' onClick={() => this.setTimeLimit(60)}>60</button>
        </div>
      );
    }
  }
export default Timer;