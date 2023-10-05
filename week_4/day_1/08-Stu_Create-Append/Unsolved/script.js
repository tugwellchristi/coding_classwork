// It's done when an ordered list containing four favorite foods is visible in the HTML below the text "My favorite foods are:"
// It's done when the ordered list has a background color of `#333333` and padding of `20px`.
// It's done when each list item has a font color of `white`, padding of `5px`, and `margin-left` of `35px`.
// It's done when each list item has a different background color.


var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var kittenEl = document.createElement("div");
var nameEl = document.createElement("div");
var favoriteEl = document.createElement("div");

// Create ordered list element
var listEl = document.createElement("ol");
// Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");
var li = document.querySelectorAll("li");

h1El.textContent = "Welcome to my page";
kittenEl.textContent = "This is my kitten 🐱.";
nameEl.textContent = "His name is Jax.";

favoriteEl.textContent = "My favorite foods are:";
// Add text content for favorite foods
li1.textContent = Pizza;
li2.textContent = Cheese;
li3.textContent = Apples;
li4.textContent = Avocados;

body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
favoriteEl.appendChild(listEl);
// Append ordered list 
favoriteEl.appendChild(listEl);
// Append list elements on the DOM
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);

h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
imgEl.setAttribute("src", "http://placekitten.com/200/300");
nameEl.setAttribute("style", "font-size:25px; text-align:center;");
kittenEl.setAttribute("style", "font-size:25px; text-align:center;");
favoriteEl.setAttribute("style", "font-size:20px;");
listEl.setAttribute("style", "background-color:#333333; padding:20px");
li.setAttribute("style", "color: white; padding:5px; margin-left:35px");

li1.setAttribute("style", "background-color: red");
li2.setAttribute("style", "background-color: yellow");
li3.setAttribute("style", "background-color: blue");
li4.setAttribute("style", "background-color: green");

// It's done when the ordered list has a background color of `#333333` and padding of `20px`.
// It's done when each list item has a font color of `white`, padding of `5px`, and `margin-left` of `35px`.
// It's done when each list item has a different background color.
// TODO: Add ordered list items containing four favorite foods
