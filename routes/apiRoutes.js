const db = require("../models");
const axios = require("axios");

module.exports = (app) => {
    //create new user
    app.post("/api/newuser", (req, res) => {
        db.User.create({
            uID: req.body.uID,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            lastLogin: "0000-00-00",
            suite: req.body.suite
        }).then((user) => {
            console.log(user);
            res.json(user);
        }).catch(err => console.log(err));
    });

    //get user
    app.get("/api/getuser/:uid", (req,res) => {
        db.User.fineOne({uID: req.params.uid} || {id: req.params.uid})
            .then((user) => {
                res.json(user);
            }).catch((err) => {
                console.log(err);
            });
    });

    //get number of players in this game
        //get count of Player table
    app.get("/api/getplayers", (req, res) => {
        db.Player.findAll({})
            .then((data) => {
                res.json(data);
            }).catch(err => console.log(err));
    });

    //get leaderboard ranks
    app.get("/api/leaderboards", (req, res) => {
        db.Player.findAll({include: [User]})
            .then(data => {
                res.json(data);
            }).catch(err => console.log(err));
    });

    //make new player
    app.post("/api/newplayer/:game_id/:player_id", (req, res) => {
        db.Player.create({
            GameId: req.params.game_id,
            UserId: req.params.player_id,
            score: 0
        }).then(data => res.json(data))
            .catch(err => console.log(err));
    });

    //make new game
    app.post("/api/newgame", (req, res) => {
        db.Game.create({
            gameDate: Date(),
            active: true
        }).then(data => res.json(data))
            .catch(err => console.log(err));
    });

    

};