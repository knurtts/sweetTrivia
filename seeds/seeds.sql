DROP DATABASE [IF EXISTS] gamedaytrivia_db;

CREATE DATABASE gamedaytrivia_db;

USE gamedaytrivia_db;

CREATE TABLE users(uID VARCHAR(100), 
firstname VARCHAR(100), 
lastname VARCHAR(100),
score INT(11) NOT NULL);

INSERT INTO users(uID, firstname, lastname, email, lastLogin, suite)
VALUES ("asdf1231", "Kyle", "Clark", "garpotrog@test.com", 0000-00-00, 322),
("afdasdfwre423", "Robert", "Anderson", "test@test.com", 0000-00-00, 808),
("djdj3434", "Spoomples", "McDankenstein", "count@test.com", 0000-00-00, 214),
("4hrh44hafdafd", "Quat", "Ross", "quat@test.com", 0000-00-00, 666);

INSERT INTO games(gameDate, active, startTime)
VALUES ("2019-03-23 00:00:00", 1, "00:00:00");

INSERT INTO players(score, GameId, UserId)
VALUES (144, 1, 3),
(96, 1, 2),
(14, 1, 4),
(158, 1, 1);

INSERT INTO questions (question)
VALUES ("When was the Broncos club founded?"),
("Who did the Broncos play there first game against?"),
("What postion did Gene Mingo play?"),
("Who was the first male cheerleader in Denver Broncos history? "),
("Colorado was the only state to turn down the opportunity to host what?"),
("What is Colorado's state nickname?"),
("What is the closest state capital to the Colorado border?"),
("Eighty percent of Colorado's water comes from what source?"),
("What Colorado city was known as 'the richest square mile on Earth'?"),
("What Colorado city is the highest in the United States?"),
("What type of candy originated in Golden, Colorado?");

INSERT INTO answers (answer, correctAnswer, QuestionId)
VALUES ("August 14th 1959", 1, 1),
("August 14th 1960", 0, 1),
("August 14th 1969", 0, 1),
("August 14th 1970", 0, 1),

("Oakland Raiders", 0, 2),
("Kansas City Chiefs", 0, 2),
("Green Bay Packers", 0, 2),
("Boston Patriots", 1, 2),

("Quarterback", 0, 3),
("Cornerback", 0, 3),
("Place Kicker", 1, 3),
("Linebacker", 0, 3),

("Barrel Man", 0, 3),
("Jim Carrey", 0, 3),
("Robin Williams", 1, 3),
("Will Ferrell", 0, 3),

("Summer Olympics", 0, 3),
("Winter Olympics", 1, 3),
("NCAA Final Four", 0, 3),
("Super Bowl", 0, 3),

("Bronco Country", 0, 3),
("Rocky Mountain High", 0, 3),
("Bicentennial State", 0, 3),
("Centennial State", 1, 3),

("Platte River", 0, 3),
("Rio Grande River", 0, 3),
("Snow", 1, 3),
("Rain", 0, 3),

("Cripple Creek", 0, 3),
("Central City", 1, 3),
("Vail", 0, 3),
("Aspen", 0, 3),

("Leadville", 1, 3),
("Alma", 0, 3),
("Denver", 0, 3),
("Breckenridge", 0, 3),

("Tootsie Roll", 0, 3),
("Laffy Taffy", 0, 3),
("Jolly Rancher", 1, 3),
("Dum Dums", 0, 3);

INSERT INTO gamequestions (GameId, QuestionId)
VALUES (1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(1, 6),
(1, 7),
(1, 8),
(1, 9),
(1, 10);

INSERT INTO playeranswers (GameId, PlayerId, GameQuestionId, AnswerId)
VALUES (1, 1, 1, 1),
(1, 1, 2, 3),
(1, 1, 3, 1),

(1, 2, 1, 4),
(1, 2, 2, 2),
(1, 2, 3, 3),

(1, 3, 1, 2),
(1, 3, 2, 1),
(1, 3, 3, 3),

(1, 4, 1, 3),
(1, 4, 2, 3),
(1, 4, 3, 3);

