// It's done when I have set up middleware to serve all static files in Express.js.
// It's done when I have used the `express.static()` method to declare the root directory to serve assets from.
// It's done when I have used the `express.static()` method (inside the `app.use()` method) for granting access to the `public` folder assets.

const express = require('express');

const app = express();
const PORT = 3001;
const path = require('path');

// Serve images, css files, js files from the public directory
// Allows us to reference files with their relative path
// Example: http://localhost:3000/images/cat.jpg
app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/')));

app.listen(PORT, () =>
  console.log(`Serving static asset routes on port ${PORT}!`)
);
