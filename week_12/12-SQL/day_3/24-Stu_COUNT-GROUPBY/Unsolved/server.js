// import required modules
const express = require('express');
const mysql = require('mysql2');

// Set the server's port to the specified environment variable or 3001 if not provided
const PORT = process.env.PORT || 3001;

// Create an express application
const app = express();

// Middleware to parse incoming requests as JSON or URL - encoded data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Create a database connection 
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'books_db'
  },
  console.log(`Connected to the books_db database.`)
);

// Query the database to get the totatl count of favorite_books grouped by in_stock, and avg_quantity grouped by section
db.query('SELECT COUNT(id) AS total_count FROM favorite_books GROUP BY in_stock', function (err, results) {
  console.log(results);
});

// Query the database to get total_in_section, max_quantity, min_quantity, 
db.query('SELECT SUM(quantity) AS total_in_section, MAX(quantity) AS max_quantity, MIN(quantity) AS min_quantity, AVG(quantity) AS avg_quantity FROM favorite_books GROUP BY section', function (err, results) {
  console.log(results);
});

// Middleware  for handlingany other request that results in a 404 response
app.use((req, res) => {
  res.status(404).end();
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
