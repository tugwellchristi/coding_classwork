const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'name',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'languages',
      message: 'What languages do you know?',
      name: 'languages',
    },
    {
      type: 'communication',
      message: 'What is your preferred method of communication?',
      name: 'communication',
    },
  ])
  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );
