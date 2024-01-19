CREATE DATABASE IF NOT EXISTS dashnetdb;

USE dashnetdb;

CREATE TABLE IF NOT EXISTS task (
	 id INT AUTO_INCREMENT PRIMARY KEY,
	 creator_id INT,
	 assagne_id INT,
	 comment_tb_id INT,
	 team_id INT,
	 status INT,
	 created_date DATETIME,
	 deadline_date DATETIME,
	 title VARCHAR(255),
	description TEXT
);

-- *
-- Init data for back end team
-- *
INSERT INTO task (creator_id, assagne_id, comment_tb_id, team_id, status, created_date, deadline_date, title, description)
VALUES
	(1000, 100, 0, 100, 0, NOW(), NOW() + INTERVAL FLOOR(RAND() * 30) DAY, 'Create users sql', 'Create SQL script for users. This script will be copied inside initdb folder');

INSERT INTO task (creator_id, assagne_id, comment_tb_id, team_id, status, created_date, deadline_date, title, description)
VALUES
	(1000, 100, 0, 100, 1, NOW(), NOW() + INTERVAL FLOOR(RAND() * 30) DAY, 'Create teams sql', 'Create SQL script for teams. This script will be copied inside initdb folder');

INSERT INTO task (creator_id, assagne_id, comment_tb_id, team_id, status, created_date, deadline_date, title, description)
VALUES
	(1000, 100, 0, 100, 3, NOW(), NOW() + INTERVAL FLOOR(RAND() * 30) DAY, 'Create tasks sql', 'Create SQL script for tasks. This script will be copied inside initdb folder');

INSERT INTO task (creator_id, assagne_id, comment_tb_id, team_id, status, created_date, deadline_date, title, description)
VALUES
	(1000, 200, 0, 100, 3, NOW(), NOW() + INTERVAL FLOOR(RAND() * 30) DAY, 'Init mysql dashnetdb', 'Done');

INSERT INTO task (creator_id, assagne_id, comment_tb_id, team_id, status, created_date, deadline_date, title, description)
VALUES
	(1000, 200, 0, 200, 3, NOW(), NOW() + INTERVAL FLOOR(RAND() * 30) DAY, 'Init docker compose file', 'Docker compose with all services, volumes and networks.');

INSERT INTO task (creator_id, assagne_id, comment_tb_id, team_id, status, created_date, deadline_date, title, description)
VALUES
	(1000, 200, 0, 200, 3, NOW(), NOW() + INTERVAL FLOOR(RAND() * 30) DAY, 'Define spring service', 'How to create image build flow. What to copy? Can hot-reload be introduced?');

INSERT INTO task (creator_id, assagne_id, comment_tb_id, team_id, status, created_date, deadline_date, title, description)
VALUES
	(1000, 200, 0, 200, 3, NOW(), NOW() + INTERVAL FLOOR(RAND() * 30) DAY, 'Create spring docker image ', 'Docker file with image build flow. Hot-reload will need a bit of additional research.');

INSERT INTO task (creator_id, assagne_id, comment_tb_id, team_id, status, created_date, deadline_date, title, description)
VALUES
	(1000, 200, 0, 200, 0, NOW(), NOW() + INTERVAL FLOOR(RAND() * 30) DAY, 'Improve spring service', 'Better image build with multiple stages for better optimization');

INSERT INTO task (creator_id, assagne_id, comment_tb_id, team_id, status, created_date, deadline_date, title, description)
VALUES
	(1000, 200, 0, 200, 1, NOW(), NOW() + INTERVAL FLOOR(RAND() * 30) DAY, 'Spring service hot reload', 'This is research task. How can we implement hot reload dev func in docker container?');

INSERT INTO task (creator_id, assagne_id, comment_tb_id, team_id, status, created_date, deadline_date, title, description)
VALUES
	(1000, 200, 0, 200, 2, NOW(), NOW() + INTERVAL FLOOR(RAND() * 30) DAY, 'React service sometimes fails on win platform', '?');

-- *
-- Init data for technical documentation team
-- *

INSERT INTO task (creator_id, assagne_id, comment_tb_id, team_id, status, created_date, deadline_date, title, description)
VALUES
	(1000, 300, 0, 100, 3, NOW(), NOW() + INTERVAL FLOOR(RAND() * 30) DAY, 'Define documentation work flow', 'Where to write, Style, ...');

INSERT INTO task (creator_id, assagne_id, comment_tb_id, team_id, status, created_date, deadline_date, title, description)
VALUES
	(1000, 200, 0, 100, 3, NOW(), NOW() + INTERVAL FLOOR(RAND() * 30) DAY, 'Init readme', 'Technical documentation README markdown file with basic introduction text.');

INSERT INTO task (creator_id, assagne_id, comment_tb_id, team_id, status, created_date, deadline_date, title, description)
VALUES
	(1000, 300, 0, 100, 1, NOW(), NOW() + INTERVAL FLOOR(RAND() * 30) DAY, 'Mysql docs', 'Write how to use Mysql db container');

INSERT INTO task (creator_id, assagne_id, comment_tb_id, team_id, status, created_date, deadline_date, title, description)
VALUES
	(1000, 200, 0, 100, 0, NOW(), NOW() + INTERVAL FLOOR(RAND() * 30) DAY, 'Docker Compose docs', 'Write how to use docker compose and its services');

INSERT INTO task (creator_id, assagne_id, comment_tb_id, team_id, status, created_date, deadline_date, title, description)
VALUES
	(1000, 200, 0, 100, 0, NOW(), NOW() + INTERVAL FLOOR(RAND() * 30) DAY, 'Docker Compose docs', 'Write how to use docker compose and its services');

-- *
-- Init data for front end team
-- *

INSERT INTO task (creator_id, assagne_id, comment_tb_id, team_id, status, created_date, deadline_date, title, description)
VALUES
	(1000, 400, 0, 300, 3, NOW(), NOW() + INTERVAL FLOOR(RAND() * 30) DAY, 'Init react', 'Init react files');

INSERT INTO task (creator_id, assagne_id, comment_tb_id, team_id, status, created_date, deadline_date, title, description)
VALUES
	(1000, 500, 0, 300, 3, NOW(), NOW() + INTERVAL FLOOR(RAND() * 30) DAY, 'Init redux tool', 'Init redux tool files: slices, stores ...');

INSERT INTO task (creator_id, assagne_id, comment_tb_id, team_id, status, created_date, deadline_date, title, description)
VALUES
	(1000, 600, 0, 300, 1, NOW(), NOW() + INTERVAL FLOOR(RAND() * 30) DAY, 'General tab', 'General tab consist of header, team and status card and grid.');

INSERT INTO task (creator_id, assagne_id, comment_tb_id, team_id, status, created_date, deadline_date, title, description)
VALUES
	(1000, 600, 0, 300, 2, NOW(), NOW() + INTERVAL FLOOR(RAND() * 30) DAY, 'Team card', 'Create team card with most important info about team and more details button.');

INSERT INTO task (creator_id, assagne_id, comment_tb_id, team_id, status, created_date, deadline_date, title, description)
VALUES
	(1000, 600, 0, 300, 3, NOW(), NOW() + INTERVAL FLOOR(RAND() * 30) DAY, 'Status card', 'Team progress card.');

INSERT INTO task (creator_id, assagne_id, comment_tb_id, team_id, status, created_date, deadline_date, title, description)
VALUES
	(1000, 500, 0, 300, 3, NOW(), NOW() + INTERVAL FLOOR(RAND() * 30) DAY, 'Header', 'Header with title, search and user menu.');

INSERT INTO task (creator_id, assagne_id, comment_tb_id, team_id, status, created_date, deadline_date, title, description)
VALUES
	(1000, 500, 0, 300, 3, NOW(), NOW() + INTERVAL FLOOR(RAND() * 30) DAY, 'Main menu', 'Create main menu!');

INSERT INTO task (creator_id, assagne_id, comment_tb_id, team_id, status, created_date, deadline_date, title, description)
VALUES
	(1000, 600, 0, 300, 0, NOW(), NOW() + INTERVAL FLOOR(RAND() * 30) DAY, 'Create tasks', 'Create task UI.');

INSERT INTO task (creator_id, assagne_id, comment_tb_id, team_id, status, created_date, deadline_date, title, description)
VALUES
	(1000, 600, 0, 300, 0, NOW(), NOW() + INTERVAL FLOOR(RAND() * 30) DAY, 'update tasks', 'Update task UI.');

INSERT INTO task (creator_id, assagne_id, comment_tb_id, team_id, status, created_date, deadline_date, title, description)
 VALUES
	 (1000, 500, 0, 300, 0, NOW(), NOW() + INTERVAL FLOOR(RAND() * 30) DAY, 'Login', 'Login UI.');

INSERT INTO task (creator_id, assagne_id, comment_tb_id, team_id, status, created_date, deadline_date, title, description)
VALUES
	(1000, 500, 0, 300, 0, NOW(), NOW() + INTERVAL FLOOR(RAND() * 30) DAY, 'Register', 'Register UI.');