// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log("Rendering License Badge with license: ", license);
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

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

  ##Installation
  ${data.installation}

  ##Usage
  ${data.usage}

  ##License
  ${renderLicenseSection(data.license)}

  ##Contributing
  ${data.contributing}

  ##Tests
  ${data.tests}

  ##Questions
  For additional questions, please reach out on GitHub at https://github.com/${data.gitHubUser} or via email at ${data.email}. 
`;
}

module.exports = generateMarkdown;
