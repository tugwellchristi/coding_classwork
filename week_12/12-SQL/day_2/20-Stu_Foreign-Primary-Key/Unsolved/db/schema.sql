-- Write your Schema Here -- 
DROP DATABASE IF EXISTS clientele_db;
CREATE DATABASE clientele_db;

USE clientele_db;

CREATE TABLE customers (
  id INT NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  PRIMARY KEY (id)
);

CREATE TABLE customer_order (
  id INT AUTO_INCREMENT PRIMARY KEY,
  customer_id INT,
  order_details TEXT,
  FOREIGN KEY (customer_id)
  REFERENCES customers(id)
  ON DELETE SET NULL
);

INSERT INTO customers(first_name, last_name)
VALUES
    ("Mike", "Lewis"), 
    ("Sarah", "Lee");

INSERT INTO customer_order(customer_id, order_details)
VALUES
    (1, "ordered chalkboard"), 
    (2, "school books");
