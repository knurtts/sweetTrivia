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
        }).catch((err) => {
            console.log(err);
        });
    });

    //get user
    app.get("/api/getuser/:uid", (req,res) => {
        db.User.fineOne({uID: req.params.uid})
            .then((user) => {
                res.json(user);
            }).catch((err) => {
                console.log(err);
            });
    });

    //get number of players in this game
        //get count of Player table

    //get player ranks
};