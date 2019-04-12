import React, { Component } from "react";
import io from "socket.io-client";
import axios from "axios";
import DateTimePicker from "react-datetime-picker";


// const socketUrl = "https://gamedaytrivia.herokuapp.com";
const socketUrl = "http://localhost:3001";

export default class Admin extends Component {

    constructor(props) {
        super(props);

        this.state = {
            startTime: null,
            socket: io(socketUrl),
            date: new Date()
        };
    };

    //set start time
    setTime = (starting) => {
        axios.post("http://localhost:3001/api/newgame", starting)
            .then((data) => {
                console.log(data);
            });
    };

    startTime = (date) => {this.setState({date})};

    render() {
        return(
            <div className="container">
            <div className="row">
                <DateTimePicker 
                    value={this.state.date}
                    onChange={this.startTime}
                />
            </div>

                <div className="row">
                    <div className="input-field">
                        <form>
                            {/* add react-datetime-picker */}
                            <input type="text" name="start-time" placeholder="HH:MM"></input>
                            <button className="waves-effect waves-light btn-large">Set Start Time</button>
                        </form>
                    </div>

                </div>
            </div>
        );
    }

}