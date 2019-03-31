const db = require("../models");

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

    app.get("/api/playercount", (req, res) => {
        db.Player.findAndCountAll({})
            .then((data) => {
                res.json(data);
            }).catch(err => console.log(err));
    });

    //get start time of active game
    app.get("/api/starttime", (req, res) => {
        db.Game.findAll({
            where:{
                active: true
            }
        })
            .then((data) => {
                res.json(data);
            }).catch(err => console.log(err));
    });

    //get leaderboard ranks
    app.get("/api/leaderboards", (req, res) => {
        db.Player.findAll({
            include: [{
                model: db.User,
                required: true
            }]
        })
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

    //make new quiz question
    app.post("/api/newquestion", (req, res) => {
        db.Question.create({
            questions: req.body.question
        }).then(data => res.json(data))
            .catch(err => console.log(err));
    });

    //make answer to a question
    app.post("/api/newanswer/:question_id", (req, res) => {
        db.Answer.create({
            answer: req.body.answer,
            correctAnswer: req.body.correct,
            QuestionId: req.params.question_id
        }).then(data => res.json(data))
            .catch(err => console.log(err));
    });

    //get questions
    app.get("/api/getquestions", (req, res) => {
        db.Question.findAll({})
            .then(data => res.json(data))
            .catch(err => console.log(err));
    });

    //get answers for a question
    app.get("/api/getanswers/:question_id", (req, res) => {
        db.Answer.findAll({QuestionId: req.params.question_id})
            .then(data => res.json(data))
            .catch(err => console.log(err));
    });

    //log player's answer
    app.post("/api/playeranswer/:game_id/:player_id/:gamequestion_id", (req, res) => {
        db.PlayerAnswer.create({
            answerTime: Date(),
            GameId: req.params.game_id,
            GameQuestionId: req.params.gamequestion_id,
            PlayerId: req.params.player_id
        }).then(data => res.json(data))
            .catch(err => console.log(err));
    });

    //empty player table
    app.post("/api/delete/players", (req, res) => {
        db.Player.destroy({where: {}, truncate: true})
            .then(response => res.send("All players deleted"))
            .catch(err => console.log(err));
    });

    //empty player answer table
    app.post("/api/delete/playeranswers", (req, res) => {
        db.PlayerAnswer.destroy({where: {}, truncate:true})
            .then(response => res.send("All players' answers deleted"))
            .catch(err => console.log(err));
    });
};
//reset