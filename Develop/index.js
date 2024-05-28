// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer");


// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Enter a description of your project',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Enter installation instructions for your project',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Enter usage information for your project',
      name: 'usage',
    },
    {
        type: 'input',
        message: 'Enter contribution guidelines for your project',
        name: 'contribution',
      },
      {
        type: 'input',
        message: 'Enter test instructions for your project',
        name: 'test',
      },
      {
        type: 'list',
        message: 'Choose a license for your project',
        choices: ['None','Apache License 2.0', 'GNU General Public License v3.0', 'MIT License'],
        name: 'license',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('README.md file generated successfully!');
        }
    });
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = `
# ${answers.title}

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${answers.license}

## Contributing
${answers.contribution}

## Tests
${answers.test}
`;

        // Write the generated content to the README file
        writeToFile('README.md', readmeContent);
    });
}


// Function call to initialize app
init();
