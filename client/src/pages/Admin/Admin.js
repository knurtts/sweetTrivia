import React, { Component } from "react";
import io from "socket.io-client";
import axios from "axios";

// const socketUrl = "https://gamedaytrivia.herokuapp.com";
const socketUrl = "http://localhost:3001";

export default class Admin extends Component {

    constructor(props) {
        super(props);

        this.state = {
            startTime: null,
            socket: io(socketUrl)
        };
    };

    setTime = (starting) => {

    }

    render() {
        return(
            <div className="container">
                <form>
                    <input type="text" name="start-time"></input>
                    <button>Set Start Time</button>
                </form>
            </div>
        );
    }

}