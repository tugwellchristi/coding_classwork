// It's done when the constructor function is named `BlogPost()` and takes in four parameters, `authorName`, `title`, `text`, and `createdOn` (this should be a date).
// It's done when the parameters are passed into the object's keys as their values.
// It's done when the object's fifth key is a method called `printMetaData()` that prints a message in the console saying `Created by (authorName) on (createdOn)`.
// It's done when I create a new object using the `BlogPost()` constructor with my own custom values.
// It's done when the meta data is printed to the console.


// TODO: Create a constructor function called 'BlogPost' that takes in 'authorName', 'title', 'text, and 'createdOn'
function BlogSpot(authorName, title, text, createdOn){
    this.authorName = authorName;
    this.title = title;
    this.text = text;
    this.createdOn = createdOn;
    this.printMetaData = function () {
        // TODO: Include a method called 'printMetaData()' that prints a message in the console saying 'Created by (authorName) on (createdOn)'
        console.log('Created by ${this.authorName} on ${this.createdOn}');
    }
}

const post = new BlogSpot("Smith", "My Green Thumb", "Plant Care", new Date())
    console.log(post);

// TODO: Create a new object using the 'BlogPost' constructor

// TODO: Call the 'printMetaData()' method on the new object
