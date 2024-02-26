
// need to require Fs package in order to write new markdown file, added below
const fs = require("fs");

//askForUserInput pulls user input from getUserInput.js
const askForUserInput = require("./utils/getUserInput")
//generateMarkdown pulls in information from generateMarkdown.js
const generateMarkdown = require("./utils/generateMarkdown")

//function to initialize app, main(), is listed below

async function main() {
    //asks the questions, gets questions and their response data from askForUserInput, imported askForUserInput function from getUserInput JS file
    const readMeData = await askForUserInput()
    //answers will be an object
    //creates variable to call the generateMarkdown function imported from JS file of the same name
    //passes readMeData to generateMarkdown function so that it can populate data into the markdown template made by generateMarkdown
    const template =generateMarkdown(readMeData)
    //uses file system aka 'fs' to write a markdownfile called newReadMe.md, makes its value the value of 'template' variable
    fs.writeFileSync("newReadMe.md", template)
}

// Function call to initialize app
main();
