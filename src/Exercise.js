import React from 'react'

class Exercise extends React.Component {
    //constructor(props) {
      //super(props);
    //}

  
    render() {
      return (
        <div className='exerciseDisplay'>
            <h1>{this.props.exerciseName}</h1>
            <p>{this.props.exerciseDescription}</p>
        </div>
      );
    }
  }
export default Exercise;