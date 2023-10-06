// TODO: Write a test that checks if isPassword() returns false when the password is less than 8 characters.
const Validate = require('../validate.js');


describe('Validate', () => {
  it('should return false for passwords less than 8 characters', () => {
    const validate = new Validate();
    expect(validate.isPassword('abc2A')).toEqual(false);
    });
  });
describe('Password uppercase', () => {
  it('should return false if a password doesnt contain at least one uppercase letter', () => {
    
  })
})

