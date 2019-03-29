import React from 'react';
import axios from 'axios';



export default class PersonList extends React.Component {
  state = {
    times: []
  }

  componentDidMount() {
    axios.get('/api/starttime')
      .then(res => {
        const times = res.data;
        this.setState({ times });
        console.log(times[0].startTime);
        const startTime = times[0].startTime
        
        
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  render() {
    return (
      <ul> 
      {this.state.times.map(time => 
        <li key={time.id}> {time.startTime}</li>)}
        
      </ul>

      
    )
  };
};