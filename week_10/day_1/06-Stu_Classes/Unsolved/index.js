// TODO: Create a class constructor named BlogPost that takes in 'authorName', 'title', 'text', and 'createdOn'.
class BlogPost {
    constructor(authorName, title, text, createdOn) {
        this.authorName = authorName;
        this.title = title;
        this.createdOn;
        // TODO: Give BlogPost a property called 'comments' that is set to an empty array.
        this.comments = [];
    }
    // TODO: Give BlogPost a method called printMetaData() that logs a message saying 'Created by (authorName) on (createdOn)'.
    printMetaData() {
        console.log(`Created by ${authorName} on ${createdOn}`);
    }
    // TODO: Give Blog Post a method called addComment() that takes in a comment and adds it to the comments array.
    addComment(comment) {
        this.comments.push(comment);
    }
}

// TODO: Create a new object using the Comment class constructor.
class Comment {
    constructor(authorName, text, createdOn, reaction) {
        this.authorName = authorName;
        this.title = title;
        this.createdOn = createdOn;
        this.reaction = reaction;
    }
    printMetaData() {
        console.log(`Created by ${this.authorName} on ${this.createdOn} ${this.reaction}`);
    }
}

const myComment = new Comment("Smith", "great work!", "my comment title", new Date(), "thumbs up!");
console.log(myComment);

// TODO: Give Blog Post a method called addComment() that takes in a comment and adds it to the comments array.

// TODO: Create a class constructor called Comment that takes in 'authorName', 'text', 'createdOn', and 'reaction'.

// TODO: Give Comment a method called printMetaData() that logs a message saying 'Created by (authorName) on (createdOn) (reaction)'.

// TODO: Create a new object using the Comment class constructor.

// TODO: Create a new object using the BlogPost class constructor.
const myBlogPost = new BlogPost("Mike", "Favorite Foods", "pizza", new Date(), "awesome!");

console.log(myBlogPost);

myBlogPost.addComment(myComment);

console.log(myBlogPost.comments);

const mySecondComment = new Comment("Larry", "text", "title", new Date(), "thumbs up!");
myBlogPost.addComment(myComment);
console.log(myBlogPost.comments);

// TODO: Use the addComment() method on your newly created BlogPost to add your newly created Comment to its comments array.

// TODO: Print the meta data for both the BlogPost and the Comment to the console.
