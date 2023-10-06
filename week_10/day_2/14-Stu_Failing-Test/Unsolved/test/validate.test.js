// TODO: Import the Validate class.
const Validate = require("../validate");

// TODO: Describe a testing suite for checking the functionality of the Validate class.
describe('Validate', () => {
    describe('Invalid', () => {
       it('should return false when isPassword is given an empty string', () => {
       const validate = new Validate();
       expect(validate.newPassword("")).toEqual(false);
       });
       
});
});
// TODO: Write a test that asserts that isPassword() returns false when passed an empty string.
