-- Create the burgers_db.
-- Switch to or use the burgers_db.
-- Create a burgers table with these fields:
-- id: an auto incrementing int that serves as the primary key.
-- burger_name: a string.
-- devoured: a boolean.

DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
CREATE TABLE burgers_db.burgers (
    id int auto_increment primary key,
    burger_name varchar(255) not null,
    devoured boolean not null default(false)
);