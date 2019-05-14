import React, { Component } from "react";
import "./Admin.css";
import io from "socket.io-client";
import axios from "axios";
import "rc-time-picker/assets/index.css";
import moment from "moment";
import TimePicker from "rc-time-picker";

const showSecond = true;
const str = showSecond ? "HH:mm:ss" : "HH:mm";


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
            <div className="container" id="adminContainer">
            <div className="row">
                <div className="col m6">Column 1</div>
                <div className="col m6">
                    <TimePicker
                        style={{ width: 100 }}
                        showSecond={showSecond}
                        defaultValue={moment()}
                        className="xxx"
                        // onChange={onChange}
                    />
                </div>

                {/* <div className="row">
                    <div className="input-field">
                        <form>
                            <input type="text" name="start-time" placeholder="HH:MM"></input>
                            <button className="waves-effect waves-light btn-large">Set Start Time</button>
                        </form>
                    </div>
                */}
                </div> 
            </div>
        );
    }

}