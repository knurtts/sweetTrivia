import React, {Component} from "react";
import "./Lobby.css";
import axios from 'axios';
import moment from 'moment';

class Lobby extends Component {
    state = {
      times: [],
      timeCount: '',
      gameID: '',
      count: [],
    }
    timeFunction = (res) => {
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

        const interval = setInterval(() => {

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
          //console.log(
           //days + ":" + hours + ":" + minutes + ":" + seconds);
           this.setState({
               timeCount: days + ":" + hours + ":" + minutes + ":" + seconds
           })
        
          // If the count down is finished, write some text 
          if (distance < 0) {
            clearInterval(interval);
            console.log("EXPIRED");
            this.props.history.push('/quiz')
            this.setState({
                timeCount:"Get Ready To Play!!"
                
            })
          }
        }, 1000); 
    }
    componentDidMount() {
        const userID = this.props.location.state.userID
        console.log('UserID' + userID);
        
        
      axios.get('/api/starttime')
        .then(res => { 
          //this.timeFunction(res)
            this.setState({
                timer: this.timeFunction(res),
                gameID: res.data[0].id,  //Add Game ID to State    
            })
        })
        .catch(function (error) {
          console.log(error);
        })
         
        /*axios.get("/api/playercount")
        .then(res =>{
            const count = res.data.count;
            this.setState( {count} );
            console.log(this.state.count);
        })*/

        //componentDidMount() {
             this.timer = setInterval(()=> {
                this.timer = null;
                clearInterval(this.timer);
                axios.get("/api/playercount")
                .then(res =>{
                    const count = res.data.count;
                    this.setState( {count} );
                    console.log(this.state.count);
                });
             }, 1000);
        //}
           
        
            }
          
        
    

    

        
          
    
    
          
        render() {
            return (<>
                <div className="container">
                    <div className="row">
                        <div className="col s12">
    
                            <h1 className="card-title" id="title">The game will begin in <div id="timer">{this.state.timeCount}</div></h1>
                            
                            <div className="">
                                <div className="card-content white-text" id="playerCard">
                                    <div className="card-title"><h5>Total Players:</h5></div>
                                    <div className="">
                                        <div className="white-text">
                                        {/* Player Count from DB */}
                                        {this.state.count}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
    
                        </div>
                    </div>
                </div>
            </>);
        }
       
    
  };


export default Lobby;