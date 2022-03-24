const inquirer = require('inquirer');
// const fs = require('fs');
// const generatePage = require('./src/page-template');

const promptUser = () => {
  return inquirer.prompt([
    {
  type: 'input',
  name: 'projectName',
  message: 'What is the name of your project?'
},
{
  type: 'input',
  name: 'projectDescription',
  message: 'Please provide a description of your project.'
},
{
  type: "list",
  name: "devTools",
  message: "Select the languages you used to develop this project:",
  choices: ["HTML", "CSS", "Javascript", "Ruby", "Python"],
},
{
  type: 'input',
  name: 'git-hub',
  message: 'Please provide a link for your github project.'
},
{
  type: 'choices',
  name: 'featured',
  message: 'Would you like this to be a feature project on your github account?',
choices: ['yes', 'no']
},
{
  type: 'choices',
  name: 'git-hub',
  message: 'Please provide a link for your github project.',
choices: ['yes', 'no']
},
{
  type: 'choices',
  name: 'repeat',
  message: 'Would you like to create another github project?',
choices: ['yes', 'no']
}
]);
};

promptUser().then(answers => console.log(answers))
// .catch((error) => {
// if (error.isTtyError) {
//   // Prompt couldn't be rendered in the current environment
// } else {
//   // Something else went wrong
// }
// }



// fs.writeFile('./index.html', generatePage(name, github), err => {
//   if (err) throw new Error(err);

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });

