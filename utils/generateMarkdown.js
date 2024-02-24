// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log("Rendering License Badge with license: ", license)
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
//pull formatting from previous functions into generateMarkdown function so it can be consolidated
function generateMarkdown(data) {
  console.log("What generate markdown receives: ", data)
  return `# ${data.title}
  ## table of contents

  ## License
  ${renderLicenseBadge(data.license)}
`;
}

module.exports = generateMarkdown;
