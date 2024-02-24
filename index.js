// TODO: Include packages needed for this application
//plan: need to require Fs package in order to write new markdown file, added below
const fs = require("fs");
// TODO: Create an array of questions for user input
//const questions = []; this was provided in starter code
//askForUserInput pulls user input from getUserInput.js
const askForUserInput = require("./utils/getUserInput")
//generateMarkdown pulls in information from generateMarkdown.js
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create a function to write README file, done below in function main()
//function writeToFile(fileName, data) {} this function was provided in starter code

// TODO: Create a function to initialize app
//function init() {} this was provided in starter code

async function main() {
    //ask the questions, gests questions and their response data from askForUserInput, imported askForUserInput function from getUserInput JS file
    var readMeData = await askForUserInput()
    console.log("Got my read me data: ", readMeData)
    //answers will be an object
    //creates variable to call the generateMarkdown function imported from JS file of the same name
    //passes readMeData to generateMarkdown function so that it can populate data into the template
    var template =generateMarkdown(readMeData)
    //uses file system aka 'fs' to write a markdownfile called newReadMe.md, makes its value the value of template variable
    fs.writeFileSync("newReadMe.md", template)
}

// Function call to initialize app
//init(); init was provided in starter code
main();
