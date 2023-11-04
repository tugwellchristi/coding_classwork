-- Write your schema here --
-- It's done when the schema includes two tables.

-- It's done when each table has two or more columns, and each column has a defined data type and constraint.

-- It's done when the schema matches the diagram.
DROP DATABASE IF EXISTS inventory_db;
CREATE DATABASE inventory_db;

USE inventory_db;

CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  product_name VARCHAR(30) NOT NULL,
  category_name VARCHAR(100) NOT NULL,
  price INT NOT NULL,
  in_stock BOOLEAN NOT NULL
);

CREATE TABLE categories (
  id INT NOT NULL,
  category_name VARCHAR(30) NOT NULL
);