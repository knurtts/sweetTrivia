const io = require("./server");
const axios = require("axios");


module.exports = function(socket, PORT) {
    console.log("Socket ID: "+socket.id);

    socket.on("userConnected", () => {
        let questions = []
        axios.get("http://localhost:3001/api/getquestions").then((qstns) => {
            questions = qstns.data;
            console.log(questions);
            // console.log(io);
            io.emit("gotquestions", questions);
        }).catch(err => console.log(err));
    })
};
