// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description 
  
   ${data.description}
  
  ## Table of Contents (Optional)
  
  If your README is very long, add a table of contents to make it easy for users to find what they need.
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  
  ## Installation
  
  ${data.installation}
  
  ## Usage 
  
 ${data.usage}
  
  ## Credits
    
  ${data.credits}
  
  ## License
  ${data.license ==="MIT" ? "[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)" :  data.license=== "GPLv3" ? "[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)" : "[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)" }
  ---
  
  🏆 The sections listed above are the minimum for a good README, but your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
  
  ## Badges
  
  [![Github All Releases](https://img.shields.io/github/downloads/atom/atom/total.svg?style=flat)]()  
  
  ## Contributing
  
${data.contributing}
  ## Tests
  
${data.tests}
  ---
  © 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
  
  `;
}

module.exports = generateMarkdown;
