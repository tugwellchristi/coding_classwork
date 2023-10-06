// * It's done when I have added tests for an exception when `new BlogPost()` is passed an invalid authorName.  
// * It's done when I have run `npm run test` and all tests pass.

const BlogPost = require('../blogPost.js');
const assert = require('assert');

describe('BlogPost', () => {
  it('should throw an error when the authorName provided is less than 2 characters long', () => {
    // Test with an authorName less than 2 characters
    assert.throws(() => new BlogPost("A", "Title", "Content"), Error);
  });

  it('should throw an error when the authorName provided contains invalid characters', () => {
    // Test with an authorName containing invalid characters
    assert.throws(() => new BlogPost("Invalid$Author", "Title", "Content"), Error);
  });
});
