CREATE DATABASE IF NOT EXISTS dashnetdb;

USE dashnetdb;

-- *
-- Tasks
-- * *

CREATE TABLE IF NOT EXISTS task (
	 id INT AUTO_INCREMENT PRIMARY KEY,
	 creator_id INT,
	 assignee_id INT,
	 comment_tb_id INT,
	 team_id INT,
	 status INT,
	 created_date DATETIME,
	 deadline_date DATETIME,
	 title VARCHAR(255),
	 ttype VARCHAR(90),
	 description TEXT
);

-- Init data for back end team
INSERT INTO task (creator_id, assignee_id, comment_tb_id, team_id, status, created_date, deadline_date, title, ttype, description)
VALUES
	(200, 100, 0, 200, 0, NOW(), NOW() + INTERVAL FLOOR(RAND() * 30) DAY, 'Create users sql', 'New', 'Create SQL script for users. This script will be copied inside initdb folder');

INSERT INTO task (creator_id, assignee_id, comment_tb_id, team_id, status, created_date, deadline_date, title, ttype, description)
VALUES
	(200, 100, 0, 200, 1, NOW(), NOW() + INTERVAL FLOOR(RAND() * 30) DAY, 'Create teams sql', 'New', 'Create SQL script for teams. This script will be copied inside initdb folder');

INSERT INTO task (creator_id, assignee_id, comment_tb_id, team_id, status, created_date, deadline_date, title, ttype, description)
VALUES
	(200, 100, 0, 200, 3, NOW(), NOW() + INTERVAL FLOOR(RAND() * 30) DAY, 'Create tasks sql', 'New', 'Create SQL script for tasks. This script will be copied inside initdb folder');

INSERT INTO task (creator_id, assignee_id, comment_tb_id, team_id, status, created_date, deadline_date, title, ttype, description)
VALUES
	(100, 200, 0, 200, 3, NOW(), NOW() + INTERVAL FLOOR(RAND() * 30) DAY, 'Correct task descriptions', 'Technical health', 'Tasks now use markdown for description./n/nImprove descriptions');

INSERT INTO task (creator_id, assignee_id, comment_tb_id, team_id, status, created_date, deadline_date, title, ttype, description)
VALUES
	(100, 200, 0, 200, 3, NOW(), NOW() + INTERVAL FLOOR(RAND() * 30) DAY, 'Init docker compose file', 'New', 'Docker compose with all services, volumes and networks.');

INSERT INTO task (creator_id, assignee_id, comment_tb_id, team_id, status, created_date, deadline_date, title, ttype, description)
VALUES
	(100, 200, 0, 200, 3, NOW(), NOW() + INTERVAL FLOOR(RAND() * 30) DAY, 'Define spring service', 'Research', 'How to create image build flow. What to copy? Can hot-reload be introduced?');

INSERT INTO task (creator_id, assignee_id, comment_tb_id, team_id, status, created_date, deadline_date, title, ttype, description)
VALUES
	(200, 100, 0, 200, 3, NOW(), NOW() + INTERVAL FLOOR(RAND() * 30) DAY, 'Create spring docker image ', 'New', 'Docker file with image build flow. Hot-reload will need a bit of additional research.');

INSERT INTO task (creator_id, assignee_id, comment_tb_id, team_id, status, created_date, deadline_date, title, ttype, description)
VALUES
	(100, 200, 0, 200, 0, NOW(), NOW() + INTERVAL FLOOR(RAND() * 30) DAY, 'Improve spring service', 'Technical health', 'Better image build with multiple stages for better optimization');

INSERT INTO task (creator_id, assignee_id, comment_tb_id, team_id, status, created_date, deadline_date, title, ttype, description)
VALUES
	(100, 200, 0, 200, 1, NOW(), NOW() + INTERVAL FLOOR(RAND() * 30) DAY, 'Spring service hot reload', 'Research', 'This is research task. How can we implement hot reload dev func in docker container?');

INSERT INTO task (creator_id, assignee_id, comment_tb_id, team_id, status, created_date, deadline_date, title, ttype, description)
VALUES
	(200, 100, 0, 200, 2, NOW(), NOW() + INTERVAL FLOOR(RAND() * 30) DAY, 'React service sometimes fails on win platform', 'Bug', '?');

-- Init data for technical documentation team
INSERT INTO task (creator_id, assignee_id, comment_tb_id, team_id, status, created_date, deadline_date, title, ttype, description)
VALUES
	(400, 300, 0, 100, 3, NOW(), NOW() + INTERVAL FLOOR(RAND() * 30) DAY, 'Define documentation work flow', 'Research', 'Where to write, Style, ...');

INSERT INTO task (creator_id, assignee_id, comment_tb_id, team_id, status, created_date, deadline_date, title, ttype, description)
VALUES
	(300, 400, 0, 100, 3, NOW(), NOW() + INTERVAL FLOOR(RAND() * 30) DAY, 'Init readme', 'New', 'Technical documentation README markdown file with basic introduction text.');

INSERT INTO task (creator_id, assignee_id, comment_tb_id, team_id, status, created_date, deadline_date, title, ttype, description)
VALUES
	(400, 300, 0, 100, 1, NOW(), NOW() + INTERVAL FLOOR(RAND() * 30) DAY, 'Mysql docs', 'Bug', 'Correct description of how to use Mysql db container');

INSERT INTO task (creator_id, assignee_id, comment_tb_id, team_id, status, created_date, deadline_date, title, ttype, description)
VALUES
	(300, 400, 0, 100, 0, NOW(), NOW() + INTERVAL FLOOR(RAND() * 30) DAY, 'Docker Compose docs', 'New', 'Write how to use docker compose and its services');

INSERT INTO task (creator_id, assignee_id, comment_tb_id, team_id, status, created_date, deadline_date, title, ttype, description)
VALUES
	(300, 400, 0, 100, 0, NOW(), NOW() + INTERVAL FLOOR(RAND() * 30) DAY, 'Docker Compose docs', 'Technical health', 'Write how to use docker compose and its services');

-- Init data for front end team
INSERT INTO task (creator_id, assignee_id, comment_tb_id, team_id, status, created_date, deadline_date, title, ttype, description)
VALUES
	(600, 500, 0, 300, 3, NOW(), NOW() + INTERVAL FLOOR(RAND() * 30) DAY, 'Init react', 'New', 'Init react files');

INSERT INTO task (creator_id, assignee_id, comment_tb_id, team_id, status, created_date, deadline_date, title, ttype, description)
VALUES
	(600, 500, 0, 300, 3, NOW(), NOW() + INTERVAL FLOOR(RAND() * 30) DAY, 'Init redux tool', 'New', 'Init redux tool files: slices, stores ...');

INSERT INTO task (creator_id, assignee_id, comment_tb_id, team_id, status, created_date, deadline_date, title, ttype, description)
VALUES
	(500, 600, 0, 300, 1, NOW(), NOW() + INTERVAL FLOOR(RAND() * 30) DAY, 'General tab', 'New', 'General tab consist of header, team and status card and grid.');

INSERT INTO task (creator_id, assignee_id, comment_tb_id, team_id, status, created_date, deadline_date, title, ttype, description)
VALUES
	(500, 600, 0, 300, 2, NOW(), NOW() + INTERVAL FLOOR(RAND() * 30) DAY, 'Team card', 'New', 'Create team card with most important info about team and more details button.');

INSERT INTO task (creator_id, assignee_id, comment_tb_id, team_id, status, created_date, deadline_date, title, ttype, description)
VALUES
	(500, 600, 0, 300, 3, NOW(), NOW() + INTERVAL FLOOR(RAND() * 30) DAY, 'Status card', 'New', 'Team progress card.');

INSERT INTO task (creator_id, assignee_id, comment_tb_id, team_id, status, created_date, deadline_date, title, ttype, description)
VALUES
	(600, 500, 0, 300, 3, NOW(), NOW() + INTERVAL FLOOR(RAND() * 30) DAY, 'Header', 'New', 'Header with title, search and user menu.');

INSERT INTO task (creator_id, assignee_id, comment_tb_id, team_id, status, created_date, deadline_date, title, ttype, description)
VALUES
	(600, 500, 0, 300, 3, NOW(), NOW() + INTERVAL FLOOR(RAND() * 30) DAY, 'Main menu', 'New', 'Create main menu!');

INSERT INTO task (creator_id, assignee_id, comment_tb_id, team_id, status, created_date, deadline_date, title, ttype, description)
VALUES
	(500, 600, 0, 300, 0, NOW(), NOW() + INTERVAL FLOOR(RAND() * 30) DAY, 'Create tasks', 'New', 'Create task UI.');

INSERT INTO task (creator_id, assignee_id, comment_tb_id, team_id, status, created_date, deadline_date, title, ttype, description)
VALUES
	(500, 600, 0, 300, 0, NOW(), NOW() + INTERVAL FLOOR(RAND() * 30) DAY, 'Wrong task data update', 'Bug', 'Update task UI.');

INSERT INTO task (creator_id, assignee_id, comment_tb_id, team_id, status, created_date, deadline_date, title, ttype, description)
 VALUES
	 (600, 500, 0, 300, 0, NOW(), NOW() + INTERVAL FLOOR(RAND() * 30) DAY, 'Login Alert improvement', 'Technical health', 'Login UI.');

INSERT INTO task (creator_id, assignee_id, comment_tb_id, team_id, status, created_date, deadline_date, title, ttype, description)
VALUES
	(600, 500, 0, 300, 0, NOW(), NOW() + INTERVAL FLOOR(RAND() * 30) DAY, 'Register improvement', 'Technical health', 'Register UI.');

-- *
-- Users
-- * *

CREATE TABLE IF NOT EXISTS user (
	id INT AUTO_INCREMENT PRIMARY KEY,
	fname VARCHAR(255) NOT NULL,
	lname VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL UNIQUE,
	password VARCHAR(255) NOT NULL
);

-- special, admins, ...
INSERT INTO user (id, email, fname, lname, password) VALUES (-1,'admin','admin','admin','$2a$10$R.3fPs3S2Qrl/oVAi/.0geWQ7emUcysurOqDsaqk1vd0gmoRJUmuq');

-- back end team
INSERT INTO user (id, email, fname, lname, password) VALUES (100,'janko.jankovic@beDev.com','Janko','Jankovic','$2a$10$R.3fPs3S2Qrl/oVAi/.0geWQ7emUcysurOqDsaqk1vd0gmoRJUmuq');
INSERT INTO user (id, email, fname, lname, password) VALUES (200,'marko.markovic@beDev.com','Marko','Markovic','$2a$10$R.3fPs3S2Qrl/oVAi/.0geWQ7emUcysurOqDsaqk1vd0gmoRJUmuq');

-- technical documentation team
INSERT INTO user (id, email, fname, lname, password) VALUES (300,'mag.rob@docTeam.com','Margaret','Roby','$2a$10$R.3fPs3S2Qrl/oVAi/.0geWQ7emUcysurOqDsaqk1vd0gmoRJUmuq');
INSERT INTO user (id, email, fname, lname, password) VALUES (400,'le.dicp@docTeam.com','Leonardo','DiCaprio','$2a$10$R.3fPs3S2Qrl/oVAi/.0geWQ7emUcysurOqDsaqk1vd0gmoRJUmuq');

-- front end team
INSERT INTO user (id, email, fname, lname, password) VALUES (500,'stpt@feDev.com','Sveta','Petka','$2a$10$R.3fPs3S2Qrl/oVAi/.0geWQ7emUcysurOqDsaqk1vd0gmoRJUmuq');
INSERT INTO user (id, email, fname, lname, password) VALUES (600,'Clint.Eastwood@feDev.com','Clint','Eastwood','$2a$10$R.3fPs3S2Qrl/oVAi/.0geWQ7emUcysurOqDsaqk1vd0gmoRJUmuq');

-- *
-- Teams
-- **

-- *
--	Comments
-- **