const express = require('express');
const path = require('path');
const fs = require('fs');
const uuid = require('./helpers/uuid');

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html')
);

app.get('/api/reviews', (req, res) => {
  // Your code for retrieving reviews here...
});

app.post('/api/reviews', (req, res) => {
  console.info(`${req.method} request received to add a review`);
  const { product, review, username } = req.body;

  if (product && review && username) {
    // Read the existing JSON data from the file
    fs.readFile('./db/reviews.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json('Error in posting review');
      }

      // Parse the existing JSON data to a JavaScript object
      const reviews = JSON.parse(data);

      // Create a new review object
      const newReview = {
        product,
        review,
        username,
        review_id: uuid(),
      };

      // Append the new review to the existing reviews array
      reviews.push(newReview);

      // Convert the updated object back to a JSON string
      const updatedData = JSON.stringify(reviews);

      // Write the JSON string back to the file
      fs.writeFile('./db/reviews.json', updatedData, (err) => {
        if (err) {
          console.error(err);
          return res.status(500).json('Error in posting review');
        }

        console.log(`Review for ${newReview.product} has been added to JSON file`);
        const response = {
          status: 'success',
          body: newReview,
        };
        console.log(response);
        res.status(201).json(response);
      });
    });
  } else {
    res.status(500).json('Error in posting review');
  }
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT`)
);
