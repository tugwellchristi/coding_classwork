CREATE DATABASE inventory_db;

-- Create two new databases --
DROP DATABASE IF EXISTS inventory_db;
CREATE DATABASE inventory_db;

-- Use inventory_db --
USE inventory_db;

-- See database in use --
SELECT DATABASE();

-- DROP DATABASE (warning lose data forever)
-- DROP DATABASE <database_name>

-- CREATE A DATABASE 
-- CREATE DATABASE <database_name>

-- SHOW ALL DATABASES
-- SHOW DATABASES; 

-- Focus on a database 
-- USE <database_name>

-- Show the active database;
-- SELECT DATABASE();