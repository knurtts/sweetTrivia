const io = require("./server").io;

module.exports = function(socket) {
    console.log("Socket ID: "+socket.id);
};