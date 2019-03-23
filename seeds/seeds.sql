CREATE DATABASE gamedaytrivia_db;

USE gamedaytrivia_db;

INSERT INTO users(uID, firstname, lastname, email, lastLogin, suite)
VALUES ("asdf1231", "Kyle", "Clark", "garpotrog@test.com", 0000-00-00, 322),
("afdasdfwre423", "Robert", "Anderson", "test@test.com", 0000-00-00, 808),
("djdj3434", "Spoomples", "McDankenstein", "count@test.com", 0000-00-00, 214),
("4hrh44hafdafd", "Quat", "Ross", "quat@test.com", 0000-00-00, 666);

INSERT INTO games(gameDate, active, startTime)
VALUES (2019-23-03, 1, 2019-03-23);

INSERT INTO players(score, GameId, UserId)
VALUES (144, 1, 3),
(96, 1, 2),
(14, 1, 4),
(158, 1, 1);

INSERT INTO questions (question)
VALUES ("What is your name?"),
("What is your quest?"),
("What is the average air speed of an unlaiden swallow?");

INSERT INTO answers (answer, correctAnswer, QuestionId)
VALUES ("King Arthur of Camelot!", 1, 1),
("Derrek...of Denver?", 0, 1),
("I don't know that!", 0, 1),
("Sir Gallahad the Chaste!", 1, 1),

("To find the Holy Grail", 1, 2),
("To go get some gas", 0, 2),
("Leave me alone!", 0, 2),
("Who put this bridge here?", 0, 2),

("I don't know that", 0, 3),
("What?", 0, 3),
("African or European?", 1, 3),
("Seven", 0, 3);

INSERT INTO playeranswers (GameId, PlayerId, GameQuestionId, AnswerId)
VALUES ()