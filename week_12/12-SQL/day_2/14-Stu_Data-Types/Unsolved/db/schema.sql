-- It's done when each column in the `customers` table has a defined data type and constraint.
-- It's done when the values in the `id`, `first_name`, and `last_name` columns cannot be `NULL`.

DROP DATABASE IF EXISTS customer_db;
CREATE DATABASE customer_db;

USE customer_db;

CREATE TABLE customers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  value_card_member BOOLEAN NOT NULL
);

INSERT INTO customers(first_name, last_name, value_card_member)
VALUES ("Mike", "Lewis", true),
("Sara", "James", true), 
("John", "Reed", false);