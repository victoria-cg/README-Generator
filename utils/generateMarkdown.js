// function that returns a license badge based on which license name is passed in
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

// function that returns the license section of README, name of chosen licsense will be dynamically inserted where the 'data' placeholder currently is
// If there is no license, return an empty string
function renderLicenseSection(data) {
  if (data) {
    return `This project uses a ${data} license. For more information please refer to https://choosealicense.com/ and select the ${data} license.`;
    
  } else {
    return '';
  }
}

//function to generate markdown for README
//renderLicenseBadge and renderLicenseSection functions are pulled into the generateMarkdown function below so that those sections will populate with the license badge and description
//generateMarkdown function also pulls key/value pairs by name using the keys from getUserInput.js such as 'title', 'data' is the placeholder for the readMeData variable/constanat
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
//exports generateMarkdown so its information can be used when imported into index.js
module.exports = generateMarkdown;
