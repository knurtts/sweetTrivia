
require('dotenv').config();

const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

const db = require('./models');

const server = app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

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
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});


const socket = require("socket.io");
const io = socket(server);

io.on("connection", (socket) => {
  console.log("connection made", socket.id);
});


const syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === 'test') {
  syncOptions.force = true;
}

db.sequelize.sync(syncOptions).then(() => {
  server;
});
