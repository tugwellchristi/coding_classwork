// TODO: Add a comment describing what kind of function this is -- constructor function
//The BlogPost.prototype.addComment function is a method added to the BlogPost constructor function's prototype. 
// It allows you to add comments to a blog post object created using the BlogPost constructor.
function BlogPost(authorName, title, text, createdOn) {
  this.authorName = authorName;
  this.title = title;
  this.text = text;
  this.createdOn = createdOn;
  this.comments = [];
  this.printMetaData = function () {
    console.log(`Created by ${this.authorName} on ${this.createdOn}`);
  };
}

// TODO: Add a comment describing the purpose of `.prototype` in this method declaration
//By defining the method on the prototype, you ensure that all instances of BlogPost share the same function, saving memory and making it more efficient. 
//This means that any BlogPost object you create will have access to the addComment method to add comments to that specific blog post.
BlogPost.prototype.addComment = function(comment) {
  this.comments.push(comment);
};

const post = new BlogPost(
  'John Doe',
  'My Second Post',
  'Cats are super cute!',
  '12/16/2021'
);

post.addComment('Nice post, I like it!');

// TODO: Add a comment describing what you expect to see printed in the console 
// Comment "Nice post, I like it" has been added to the comments array of the post object using the addComment method.
console.log(post.comments);
