import React from 'react'

class Timer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {time: 0, timeLimit: 10};
      this.setTimeLimit.bind(this);
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
  
    render() {
      return (
        <div>
          <h5>Your timer is {this.state.timeLimit} seconds</h5>
          <h2>{this.state.time}</h2>
          <button type='button' onClick={() => this.setTimeLimit(40)}>40</button>
          <button type='button' onClick={() => this.setTimeLimit(50)}>50</button>
          <button type='button' onClick={() => this.setTimeLimit(60)}>60</button>
        </div>
      );
    }
  }
export default Timer;