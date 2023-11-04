DROP DATABASE IF EXISTS books_db;
-- Creating the books_db database
CREATE DATABASE books_db;

-- use inventory_db database --
USE books_db;

-- Creates the table "books_db" within inventory_db --
CREATE TABLE biographies (
   -- Creates a numeric column called "id" --
  id INT NOT NULL,
  -- Makes a string column called "name" which cannot contain null --
  name VARCHAR(100) NOT NULL
);

-- Show what databases that have been created
SHOW DATABASES;
-- Create database for a book store
-- CREATE DATABASE <database_name>
CREATE DATABASE book_store;
-- Switch context to a database
-- Commands after will be use given database
-- USE <database_name>
USE book_store;
-- Create table to store book data
/*
    - book title
    - author first name
    - author last name
    - what year the book was released
    - how many we have in stock in our store
    - the number of pages
    - unique id for the book
*/
/*
    CREATE TABLE <table_name> (
        <column_name> <data_type> <options?>,
        ...
    );
*/
CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100),
    author_fname VARCHAR(50),
    author_lname VARCHAR(50),
    released_year INT,
    quantity INT,
    pages INT
);
-- Show a specific table layout
-- SYNTAX: DESC <table_name>
DESC books;
-- Add data into the books table
/*
    SYNTAX: INSERT INTO <table_name>(...columns)
        VALUES (..row);
*/
INSERT INTO books (title, author_fname, author_lname, released_year, quantity, pages)
    VALUES("Norse Mythology", "Neil", "Gaiman", 2016, 12, 304);
-- Check for data in our books table
-- SYNTAX: SELECT <column_names> FROM <table_name>;
SELECT title, author_fname, author_lname FROM books;
SELECT * FROM books;
-- Add in multiple books to our books table
INSERT INTO books (title, author_fname, author_lname, released_year, quantity, pages)
VALUES
    ('The Amazing Adventures of Kavalier & Clay', 'Michael', 'Chabon', 2000, 68, 634),
    ('10% Happier', 'Dan', 'Harris', 2014, 23, 256),
    ('A Heartbreaking Work of Staggering Genius', 'Dave', 'Eggers', 2001, 104, 437),
    ('Cannery Row', 'John', 'Steinbeck', 1945, 95, 181),
    ('Conclave', 'Robert', 'Harris', 2017, 12, 416),
    ('The Circle', 'Dave', 'Eggers', 2013, 26, 504);
    
-- Create table for magazines
CREATE TABLE magazines (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100),
    issue DATE,
    frequency VARCHAR(30)
);
-- Add data for magazines
-- YYYY-MM-DD
INSERT INTO magazines(title, issue, frequency)
    VALUES
        ("Vanity Fair", "2023-8-1", "Monthly"),
        ("Vanity Fair", "2023-7-1", "Monthly"),
        ("Newsweek", "2023-10-13", "Weekly"),
        ("Newsweek", "2023-10-06", "Weekly"),
        ("The Economist", "2023-10-07", "Weekly");
        
-- SHOW all tables in books_store database
SHOW TABLES;
-- SELECT weekly magazines
SELECT title FROM magazines WHERE frequency = "Weekly";
-- DROP a table
DROP TABLE magazines;
-- DROP DATABASE
DROP DATABASE books_store;
    
