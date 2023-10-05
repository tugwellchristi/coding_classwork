//Expected Behavior
// The article title has a font size of 50px.

// The text in the headline "Welcome to World News" is white. 

// Actual Behavior
// The article title is smaller than 50px.
// The text in the headline "Welcome to World News" is blue. 

// Assets 
// The following image demonstrates the web application's appearance and functionality:
// ![On the World News webpage, "Welcome to World News" appears in white text, and the article title is larger than the webpage title.](./images/01-screenshot.png)

// Access element using id
var articlesDiv = document.getElementById('articles');
var headerDiv = document.getElementById('header');

// Change style by accessing style object's properties
articlesDiv.children[0].style.fontSize = '50px';
headerDiv.children[0].style.color = 'white';
