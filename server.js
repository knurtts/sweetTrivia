
require('dotenv').config();

const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const axios = require("axios");

const db = require('./models');

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

require("./routes/apiRoutes")(app);
// Send every request to the React app
// Define any API routes before this runs
require("./routes/apiRoutes")(app);
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

//Socket.io setup
const http =  require("http").createServer(app);
const io = module.exports = require("socket.io")(http);
// const SocketPORT = process.env.PORT+1 || 3002;
const SocketManager = require("./SocketManager");


// io.on("connection", SocketManager);

io.on("connection", function(socket) {
  console.log("Socket ID: "+socket.id);

  socket.on("userConnected", () => {
      let questions = [];
      axios.get("/api/getquestions").then((qstns) => {
          questions = qstns.data;
          
          io.emit("gotquestions", questions);
      }).catch(err => console.log(err));
  });
});


const syncOptions = { force: true};

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === 'test') {
  syncOptions.force = false;
}

db.sequelize.sync(syncOptions).then(() => {
  http.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
});
//reset!