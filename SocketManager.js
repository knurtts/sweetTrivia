const io = require("./server");
const axios = require("axios");


module.exports = function(socket) {
    console.log("Socket ID: "+socket.id);

    socket.on("userConnected", () => {
        let questions = [];
        axios.get("/api/getquestions").then((qstns) => {
            questions = qstns.data;
            
            io.emit("gotquestions", questions);
        }).catch(err => console.log(err));
    })
};
