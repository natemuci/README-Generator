const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your webpage?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please write a breif description about your webpage.',
      
    },
    {
      type: 'list',
      name: 'license',
      message: 'Which type of license are you using?',
      choices: ['MIT', 'Drivers', 'Boating', 'Hunting'],
    },
  ])
  .then((data) => {
    console.log(data);

    fs.writeFile("README.md", layOut(data), (err) =>
      (err) ? console.log(err) : console.log('Success!'))
    
  });

  const layOut = ({license, title, description}) =>
  `# ${title}

  ## Description
  
  ${description}
  
  ## Table of Contents 
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributers](#contributers)
  - [License](#license)
  - [Test](#test)
  - [Contact](#contact)
  
  ## Installation
  
  What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.
  
  ## Usage
  
  Provide instructions and examples for use. Include screenshots as needed.
  
  To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
  
      md
      ![alt text](assets/images/screenshot.png)
      
  
  ## Contributers
  
  List your collaborators, if any, with links to their GitHub profiles.
  
  If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
  
  If you followed tutorials, include links to those here as well.
  
  ## License
  
  ${license}
  
  
  ## Tests 
  
  ## Contact`;
  //the original README.md template was modeled after the codeing bootcamp template from: (https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)
