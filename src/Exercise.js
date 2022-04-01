import React from 'react'

class Exercise extends React.Component {
    constructor(props) {
      super(props);
      this.state = {exerciseName: "Exercise Name", exerciseDescription: "This is filler text"};

    }

  
    render() {
      return (
        <div className='exerciseDisplay'>
            <h1>{this.state.exerciseName}</h1>
            <p>{this.state.exerciseDescription}</p>
        </div>
      );
    }
  }
export default Exercise;