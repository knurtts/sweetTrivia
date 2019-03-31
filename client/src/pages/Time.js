import React from 'react';
import axios from 'axios';
import moment from 'moment';



export default class PersonList extends React.Component {
  state = {
    times: []
  }

  componentDidMount() {
    axios.get('/api/starttime')
      .then(res => {
        
        const times = res.data;
        this.setState({ times });
        const startTime = times[0].startTime 

      //Format the data returned form SQL in a MM/DD/YYY format with 24hr time
       const dateFormat = moment.utc(startTime).format('L HH:mm:ss');

       //convert string to date time
       const newDate = new Date(dateFormat);

       //convert date time to milliseconds
       const countDownDate = newDate.getTime();
        
        //console.log(dateFormat);
        //console.log(milliseconds);

        const interval = setInterval(function() {

          // Get todays date and time
          const now = new Date().getTime();
        
          // Find the distance between now and the count down date. Both times are in milliseconds
          const distance = countDownDate - now;
        
          // Time calculations for days, hours, minutes and seconds
          const days = Math.floor(distance / (1000 * 60 * 60 * 24));
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
          // Display the result
          console.log(
           days + "d " + hours + "h "
          + minutes + "m " + seconds + "s ");
        
          // If the count down is finished, write some text 
          if (distance < 0) {
            clearInterval(interval);
            console.log("EXPIRED");
            
          }
        }, 1000);
        
      
        

      
        
        
       

        
        
        
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