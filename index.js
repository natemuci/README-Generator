const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'location',
      message: 'Where are you from?',
      
    },
    {
      type: 'list',
      message: 'What is your preferred season',
      name: 'seasons',
      choices: ['Fall', 'Summer', 'Winter', 'Spring'],
    },
  ])
  .then((data) => {
    console.log(data);

    fs.writeFile("index.html", layOut(data), (err) =>
      (err) ? console.log(err) : console.log('Success!'))
    
  });

  const layOut = ({location, seasons, name}) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h2>Hello my name is ${name}!</h2>
    <h2>I was born in ${location}</h2>
    <h2>My favorite season is ${seasons}</h2>

</body>
</html>`;
