// Import express and mysql required modules
const express = require('express');
const mysql = require('mysql2');

// Define the port for the server to listen on, defaulting to 3001
const PORT = process.env.PORT || 3001;
const app = express();

// Middleware for parsing URL-encoded and JSON data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Create a connection to the MySQL database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'classlist_db'
  },
  // Log a message when connected to the database
  console.log(`Connected to the classlist_db database.`)
);

// Perform a query to select all records from the 'students' table
db.query('SELECT * FROM students', function (err, results) {
  // Log the query results
  console.log(results);
});

// Handle any requests that don't match other routes with a 404 status
app.use((req, res) => {
  res.status(404).end();
});

// Start the server and log the port it's listening on
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});