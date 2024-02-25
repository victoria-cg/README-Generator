//gets inquirer package for use in this module
const inquirer = require("inquirer");

//creates an array of objects that will be asked to the user using inquirer
//objects are key-value pairs with 'name' as key and user input as value
let questionsToAsk = [
  {
    type: "input",
    message: "What is your title?",
    name: "title",
  },
  {
    type: "input",
    message: "Write a description for your new README",
    name: "description",
  },
  {
    type: "input",
    message: "What do you want your table of contents to say?",
    name: "contents",
  },
  {
    type: "input",
    message: "What is your project's installation process?",
    name: "installation",
  },
  {
    type: "input",
    message: "How do users use your project?",
    name: "usage",
  },
  {
    type: "input",
    message: "What kind of license are you using?",
    name: "license",
  },
  {
    type: "input",
    message: "How can other people contribute to this project?",
    name: "contributing",
  },
  {
    type: "input",
    message: "What tests can people run on this project/app?",
    name: "tests",
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "gitHubUser",
  },
  {
    type: "input",
    message: "What is your contact email address?",
    name: "email",
  }
];

//async function waits for promise of user input to be fulfilled and returns that information
const askForUserInput = async () => {
  const userInput = await inquirer.prompt(questionsToAsk);
  return userInput;
};

//exports user input data taken collected by the askForUserInput function, makes it available to other modules/js files
module.exports = askForUserInput;