
//  It's done when I can run `npm run test` and see a failing test in the terminal.
//  It's done when my test code creates an instance of the `Validate` class.
//  It's done when my test code calls the `isPassword` method and passes `""` (empty string) as an argument.
//  It's done when my test code asserts that the expected return value is `false`.



// TODO: Define a Validate class with an isPassword() function that takes in a password parameter.
class Validate {
    isPassword(str) {
        if (!str) {
            return false;
        }

    }
}
// TODO: Export the Validate class from this file.
module.exports = Validate;