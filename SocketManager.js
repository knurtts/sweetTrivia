const io = require("./server");
const axios = require("axios");

answerWait = () => {
    setTimeout(() => {
        io.emit("nextquestion")
    }, 1000);
}

nextQuestion = () => {
    io.emit("answerscreen");
    answerWait();
}

module.exports = function(socket) {
    console.log("Socket ID: "+socket.id);

    socket.on("userConnected", () => {
        // let questions = [];
        axios.get("http://localhost:3001/api/getquestions").then((qstns) => {
            questions = qstns.data;
            
            io.emit("gotquestions", questions);

            //start timer 20 seconds
            let countdown = 0;
            
            setInterval(() => {
                nextQuestion();

                countdown++;

                if (countdown === 3) {
                    io.emit("gotoleaderboards"); 
                } else {
                    nextQuestion();
                }
            }, 2000);
            
            

            //after 20 seconds emit signal for answer page

            //start timer for 10 seconds

            //repeat 3 times

            //send signal to go to leader boards

        }).catch(err => console.log(err));
    })
};
