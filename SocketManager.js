const io = require("./server").io;
const axios = require("axios");
const express = require("express");
const app = express();

module.exports = function(socket) {
    console.log("Socket ID: "+socket.id);

    socket.on("userConnected", () => {
        axios.get("http://localhost:3001/api/getquestions").then((qstns) => {
            console.log(qstns);
        }).catch(err => console.log(err));
    })
};
