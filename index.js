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
      type: 'input',
      name: 'installation',
      message: 'What are the commands needed for installation?',
      default: 'npm i'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions for use.',
    },
    // {
    //   type: 'list',
    //   name: 'contributors',
    //   message: 'Where there any contributors?',
    //   choices: ['Yes', 'No']
    // },
    {
      type: 'input',
      name: 'credits',
      message: 'List your collaborators, if any, with links to their GitHub profiles.'
    },
    {
      type: 'list',
      name: 'license',
      message: 'Which type of license are you using?',
      choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
      type: 'input',
      name: 'test',
      message: 'what command should be used to test',
      default: 'npm test'
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
  - [Credits](#credits)
  - [License](#license)
  - [Test](#test)
  - [Contact](#contact)
  
  ## Installation
  
  To install necessary dependencies, run the following comand:

  ${installation}

  ## Usage
  
  ${usage}
        
  ## Credits

  ${credits}
  
  
  ## License
  
  This project uses the ${license} license.
  
  
  ## Test 
  
  To run tests enter the following command:

  ${test}

  ## Contact
  
  My name is ${name} if you have any questions you can reach me at ${email} or you can see more of my work on GitHub at ${git}.
  `;
  