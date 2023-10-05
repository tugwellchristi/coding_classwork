// TODO: Create a class constructor named ForumItem that takes in 'authorName',  'text', and 'createdOn'.
class ForumItem {
  constructor(authorName, text, createdOn) {
    this.authorName = authorName;
    this.text = text;
    this.createdOn = createdOn;
  }
}
// TODO: Setup BlogPost and Comment so they inherit their structure from ForumItem.
// extends references the parent class that we are using as a baseline
class BlogPost extends ForumItem {
  constructor(authorName, text, createdOn) {
    // super will call the parent constructor class
    super(authorName, text, createdOn);
    this.comments = [];
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

class Comment extends ForumItem {
  constructor(authorName, text, createdOn, reaction) {
    super(authorName, text, createdOn);
    this.reaction = reaction;
  }
}

// TODO: Create a new object using the Comment class constructor.
const myComment = new Comment("Smith", "comment for favorite foods", new Date(), "thumbs up");
console.log(myComment);

// TODO: Create a new object using the BlogPost class constructor.
const myBlogPost = new BlogPost("James", "my blog title", "thumbs up", new Date(), "awesome!");
console.log(myBlogPost);
// TODO: Log both newly created BlogPost and Comment to the console.
