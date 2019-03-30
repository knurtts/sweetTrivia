import React, {Component} from "react";
//import "./components/timer.js"
import "./Lobby.css";
import CountDownTest from "../../components/timer.js";
import axios from "axios";



class Lobby extends Component {
    state = {
        count: []
      }
      componentDidMount() {

        axios.get("/api/playercount")
        .then(res =>{
            const count = res.data.count;
            this.setState( {
                count
            } );
            console.log(this.state.count);
        })
        
    }

    render() {
        return (<>
      <nav>
            <div className="nav-wrapper" >
                
           

           

            <ul class="right waves-effect waves-light">
      <li><a href="/">Home</a></li>
      <li>
        <a href="/">Logout</a>
        </li>
      
    </ul>
  </div>
        </nav>


       

            <div className="container">
                <div className="row">
                    <div className="col s12">

                        <h1 className="card-title" id="title">The game will begin in</h1>

                                    <div id="timer"><h5><CountDownTest /></h5></div>

                        
                        
                        <div className="card blue">
                            <div className="card-content white-text" id="playerCard">
                                <div className="card-title"><h5>Total Players:</h5></div>
                                <div className="card-panel yellow darken-4">
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
}

export default Lobby;