const express = require('express');
const PORT = 3001;
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// GET request for `/api/reviews`
app.get('/api/reviews', (req, res) => {
  console.log('Received GET request for /api/reviews');
  // Your code here to handle the GET request, e.g., retrieve reviews from a database
  res.send('GET request for /api/reviews received');
});

// POST request for `/api/reviews`
app.post('/api/reviews', (req, res) => {
  console.log('Received POST request for /api/reviews');
  // Your code here to handle the POST request, e.g., add a new review to the database
  res.send('POST request for /api/reviews received');
});

// GET request for `/api/upvotes`
app.get('/api/upvotes', (req, res) => {
  console.log('Received GET request for /api/upvotes');
  // Your code here to handle the GET request, e.g., retrieve upvotes from a database
  res.send('GET request for /api/upvotes received');
});

// POST request for `/api/upvotes`
app.post('/api/upvotes', (req, res) => {
  console.log('Received POST request for /api/upvotes');
  // Your code here to handle the POST request, e.g., add a new upvote to the database
  res.send('POST request for /api/upvotes received');
});

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
