// TODO: Import express
const express = require("express");
// TODO: Import 'terms.json' file
const PORT = 3001;

// TODO: Initialize app variable
const app = express();


// TODO: Create a route for a GET request that will return the content of our `terms.json` file
app.get("/", (req, res) => {
  console.log('rootpath');
});

app.listen(PORT, () =>
const filePath = path.join(__dirname, "terms.json");
  console.log(`Example app listening at http://localhost:${PORT}`)
);
