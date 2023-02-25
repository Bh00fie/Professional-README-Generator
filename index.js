// External Packages
const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const util = require('util');

// Internal Modules
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'What is the description of the project? What was your motivation? Why did you build this project? What problem does it solve? What did you learn?',
        name: 'description',
      },
      {
        type: 'input',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'What is the usage of this project? Provide instructions and examples for use',
        name: 'usage',
      },
      {
        type: 'list',
        message: 'What is the license used for this project?',
        choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause 'Simplified' License", "BSD 3-Clause 'New' or 'Revised' License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v3.0", "Mozilla Public License 2.0", "The Unlicense"],
        name: 'license',
      },
      {
        type: 'input',
        message: 'If you would like other developers to contribute it, what are the guidelines to do so?',
        name: 'contributing',
      },
      {
        type: 'input',
        message: 'Provide examples on how to run your application, list them here.',
        name: 'tests',
      },
      {
        type: 'input',
        message: 'What is your gitHub username?',
        name: 'gitHub',
      },
      {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
      },
    ]);
  }

// function to write README file
const writeToFile = util.promisify(fs.writeFile);

// function to initialize program
function init() {

}

// function call to initialize program
init();
