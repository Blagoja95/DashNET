CREATE DATABASE IF NOT EXISTS dashnetdb;

USE dashnetdb;

CREATE TABLE IF NOT EXISTS tasks (
	 id INT AUTO_INCREMENT PRIMARY KEY,
	 creatorId INT,
	 assigneeId INT,
	 teamId INT,
	 status INT,
	 createdDate DATETIME,
	 deadlineDate DATETIME,
	 title VARCHAR(255),
	description TEXT
);

INSERT INTO tasks (creatorId, assigneeId, teamId, status, createdDate, deadlineDate, title, description)
VALUES
	(1000, 1000, 3001, 0, '2022-01-01', '2022-02-01', 'Create users sql', 'Create TSQL script for users');

INSERT INTO tasks (creatorId, assigneeId, teamId, status, createdDate, deadlineDate, title, description)
VALUES
	(1000, 2002, 3001, 0, '2022-03-01', '2022-05-12', 'Create tasks sql', 'Create TSQL script for tasks');

INSERT INTO tasks (creatorId, assigneeId, teamId, status, createdDate, deadlineDate, title, description)
VALUES
	(1000, 1000, 3005, 0, '2022-03-01', '2022-05-12', 'Create teams sql', 'Create TSQL script for teams');

INSERT INTO tasks (creatorId, assigneeId, teamId, status, createdDate, deadlineDate, title, description)
VALUES
	(2002, 2002, 3005, 4, '2022-03-01', '2022-05-12', 'Create tasks db', 'Create table for tasks');

INSERT INTO tasks (creatorId, assigneeId, teamId, status, createdDate, deadlineDate, title, description)
VALUES
	(2002, 2002, 3005, 4, '2022-03-01', '2022-05-12', 'dashNet database', 'Create dashNet database in MySQL server');