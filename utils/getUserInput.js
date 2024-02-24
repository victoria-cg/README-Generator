//gets inquirer package for use in this module
const inquirer = require("inquirer");

//creates an array of objects that will be asked to the user using inquirer
var questionsToAsk = [
  {
    type: "input",
    message: "What is your license?",
    name: "license",
  },
  {
    type: "input",
    message: "What is your title??",
    name: "title",
  },
  {
    type: "password",
    message: "Re-enter password to confirm:",
    name: "confirm",
  },
  {
    message: "what is your first name?",
    name: "firstName",
  },
];

const askForUserInput = async () => {
  const input = await inquirer.prompt(questionsToAsk);
  return input;
};

module.exports = askForUserInput;