// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function has placeholder in badge generating markdown link that will dynamically fill user data for the license name
function renderLicenseBadge(data) {
  console.log("Rendering License Badge with license: ", data);
 if (data) {
  return `![Static Badge](https://img.shields.io/badge/License%20Type%3A%20${data}-8A2BE2)`;
 } else {
  return '';
 }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data) {
    return `This project uses a ${data} license. For more information please refer to https://choosealicense.com/ and select the ${data} license.`;
    
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
//pull formatting from previous functions into generateMarkdown function so it can be consolidated, render badges as intended
//also pulls key/value pairs by name using the keys from getUserInput.js such as 'title'
function generateMarkdown(data) {
  console.log("Info that generateMarkdown receives: ", data);
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  For additional questions, please reach out on GitHub at https://github.com/${data.gitHubUser} or via email at ${data.email}. 
`;
}

module.exports = generateMarkdown;
