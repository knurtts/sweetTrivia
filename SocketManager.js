const io = require("./server");
const axios = require("axios");


module.exports = function(socket) {
    console.log("Socket ID: "+socket.id);

    socket.on("userConnected", () => {
        // let questions = [];
        axios.get("http://localhost:3001/api/getquestions").then((qstns) => {
            questions = qstns.data;
            
            io.emit("gotquestions", questions);

            io.emit("nextquestion");

            let count = 0;
            
            nextQuestion = () => {
                io.emit("nextquestion");

                count++;

                if (count === 5) {
                    clearInterval(questionTimer);
                    setTimeout(() => {
                        io.emit("gotoleaderboards");
                    }, 15000);
                }
            }

            let questionTimer = setInterval(nextQuestion, 5000);


        }).catch(err => console.log(err));
    })
};
