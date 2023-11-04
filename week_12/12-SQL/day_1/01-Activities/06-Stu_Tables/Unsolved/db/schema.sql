DROP DATABASE IF EXISTS books_db;
-- Creates the "books_db" database --
CREATE DATABASE books_db;


-- Add biography table --
-- It's done when a new table biographies has been created and includes two columns id and name.

-- It's done when the id column has a data type of INT and the name column has a data type of VARCHAR(100).

USE books_db;

CREATE TABLE biographies (
  id INT, 
  name VARCHAR(100)
);

CREATE TABLE fiction (
    id INT, 
    name VARCHAR(100), 
    year INT
);

SHOW TABLES;
