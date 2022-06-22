const inquirer = require('inquirer');
const fs = require('fs');

const licences = ["MIT", "Apache", "WTFPL"];

const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'motivation',
            message: 'What was your motivation?',
        },
        {
            type: 'input',
            name: 'why',
            message: 'Why did you build THIS project, specifically?',
        },
        {
            type: 'input',
            name: 'problem',
            message: 'What problem does it solve?',
        },
        {
            type: 'input',
            name: 'learn',
            message: 'What did you learn?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide instructions and examples for use. Include screenshots as needed.',
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Please provide a list of any collaborators, if any, with links to their GitHub profiles.',
        },
        {
            type: 'list',
            name: 'licence',
            message: 'Please select a licence.',
            choices: licences,
        },
        {
            type: 'input',
            name: 'features',
            message: 'If your project has a lot of features, list them here.',
        },
    ]);
};

const generateREADME = ({ title, motivation, why, problem, learn, installation, usage, credits, licence, features }) =>
    `
# ${title}

## Description

- Project Motivation: ${motivation}
- Purpose: ${why}
- What did it solve: ${problem}
- What I learned along the way: ${learn}

## Instalation

Steps required to get off the ground: ${installation}

## Usage

How to use: ${usage}

## Credits

${credits}

## Licence

${licence}

## Features

${features}
`
const init = () => {
    questions()
        .then((answers) => fs.writeFileSync('README.md', generateREADME(answers)))
        .then(() => console.log('Successfully wrote to README'))
        .catch((err) => console.error(err));
};

init();
