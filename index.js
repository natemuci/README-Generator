const inquirer = require('inquirer');
const fs = require('fs');
const { clear } = require('console');

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
      type: 'input',
      name: 'installation',
      message: 'What are the steps needed for installation?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How will the webpage be used',
    },
    {
      type: 'list',
      name: 'contributers',
      message: 'Where there any contributers?',
      choices: ['Yes', 'No']
    },
    {
      type: 'input',
      name: 'conName',
      message: 'What is the name of the contributer?',
    },
    {
      type: 'input',
      name: 'conEmail',
      message: 'What is the email of your contributer?',
    },
    {
      type: 'input',
      name: 'conGit',
      message: 'What is the url of the contributer?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Which type of license are you using?',
      choices: ['MIT', 'Drivers', 'Boating', 'Hunting'],
    },
    {
      type: 'input',
      name: 'test',
      message: 'test',
    },
    {
      type: 'input',
      name: 'name',
      message: 'Please enter your name.',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Please enter your email.',
    },
    {
      type: 'input',
      name: 'git',
      message: 'What is your GitHub Url?',
    },
  ])
  .then((data) => {

    fs.writeFile("README.md", layOut(data), (err) =>
      (err) ? console.log(err) : console.log('Success!'))
    
  });

  const layOut = ({license, title, description, installation, name, email, test, usage, conGit, conName, conEmail, git }) =>
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
  
  ${installation}

  ## Usage
  
  ${usage}
  Provide instructions and examples for use. Include screenshots as needed.
  
  To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
  
      md
      ![alt text](assets/images/screenshot.png)
      
  
  ## Contributers

  Thanks to ${conName} for their contributions, they can be reached at ${conEmail} or ${conGit}
  
  List your collaborators, if any, with links to their GitHub profiles.
  
  If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.
  
  If you followed tutorials, include links to those here as well.
  
  ## License
  
  ${license}
  
  
  ## Tests 
  
  ${test}

  ## Contact
  
  My name is ${name} if you have any questions you can reach me at ${email}
  `;
  //the original README.md template was modeled after the codeing bootcamp template from: (https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)
