
require('dotenv').config();

const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

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
const http =  require("http").createServer();
const io = module.exports = require("socket.io")(http, {origins: "*:*"});

const SocketManager = require("./SocketManager");

io.on("connection", SocketManager);

http.listen(3002, () => {
  console.log("SOCKET CONNECTION MADE AT PORT: "+PORT);
});


const syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === 'test') {
  syncOptions.force = false;
}

db.sequelize.sync(syncOptions).then(() => {
  app.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
});
//reset!