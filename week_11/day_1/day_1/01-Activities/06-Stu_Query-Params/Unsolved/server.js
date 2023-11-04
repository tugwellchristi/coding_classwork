const express = require('express');
// Helper function to sort our data in ascending and descending order
const { sortData } = require('./sortData');
const termData = require('./terms.json');

const PORT = 3001;

const app = express();

const sortHelper = (type) =>
  termData.sort(sortData('term', 'relevance', `${type}`));

// TODO: Add a comment describing the functionality of this route
// The functionality of this route, app.get('/api/terms/', ...), is to handle GET requests to the '/api/terms/' endpoint in a web application. It first checks if there are query parameters in the request using req.query. If there are query parameters, it specifically checks if the 'sort' parameter is set to 'dsc'. If that condition is met, it returns a JSON response with the result of a function called sortHelper('dsc').
app.get('/api/terms/', (req, res) => {  
  // TODO: Add a comment describing the req.query object
// The req.query object allows us to access query parameters in the URL.
  // It's used to retrieve additional information provided in the request's query string.

  const hasQuery = Object.keys(req.query).length > 0;

  if (hasQuery && req.query.sort === 'dsc') {
    return res.json(sortHelper('dsc'));
  }

  if (hasQuery && req.query.sort === 'asc') {
    return res.json(sortHelper('asc'));
  }

  // If there is no query parameter, return terms
  return res.json(termData);
});

// TODO: Add a comment describing what this route will return

app.get('/api/term/:term', (req, res) => {
  // TODO: Add a comment describing the content of req.params in this instance
  // This route is designed to handle GET requests to '/api/term/:term', where ':term' is a placeholder for a specific term.
  // It is expected to return information or data related to the specified term in response to the request.
  // The actual content to be returned will depend on the specific implementation for handling the requested term.

  const requestedTerm = req.params.term.toLowerCase();

  for (let i = 0; i < termData.length; i++) {
    if (requestedTerm === termData[i].term.toLowerCase()) {
      return res.json(termData[i]);
    }
  }

  // Return a message if the term doesn't exist in our DB
  return res.json('No term found');
});

// TODO: Add a comment describing what this route will return
  // This route handles GET requests to '/api/terms/:category', where ':category' is a placeholder for a specific category.
  // It will return a JSON response containing an array of terms that belong to the requested category.
  // The route filters and collects terms based on the specified category from the 'termData' array.

app.get('/api/terms/:category', (req, res) => {
  const requestedCategory = req.params.category.toLowerCase();
  const result = [];

  for (let i = 0; i < termData.length; i++) {
    const currentTermCategory = termData[i].category;
    if (requestedCategory === currentTermCategory) {
      result.push(termData[i]);
    }
  }
  return res.json(result);
});

// TODO: Add a comment describing what this route will return
  // This route handles a GET request to '/api/categories'.
  // It will return a JSON response containing an array of unique categories extracted from the 'termData'.
  // The route collects all categories from 'termData', removes duplicates, and sends the unique category list as the response.

app.get('/api/categories', (req, res) => {
  const categories = termData.map((term) => term.category);

  const result = categories.filter((cat, i) => categories.indexOf(cat) === i);

  return res.json(result);
});

app.listen(PORT, () =>
  console.info(`Example app listening at http://localhost:${PORT}`)
);
