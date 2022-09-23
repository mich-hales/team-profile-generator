const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const employees = [];

// Manager Questions
const managerQs = [
    {
        type: 'input',
        name: 'name',
        message: "What is the manager's name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the manager's ID?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the manager's email?",
    },
    {
        type: 'input',
        name: 'school',
        message: "What is the manager's office number?",
    }
];

// Engineer Questions
const EngineerQs = [
    {
        type: 'input',
        name: 'name',
        message: "What is the engineer's name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the engineer's ID?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the engineer's email?",
    },
    {
        type: 'input',
        name: 'school',
        message: "What is the engineer's GitHub username?",
    }
];

// Intern Questions
const InternQs = [
    {
        type: 'input',
        name: 'name',
        message: "What is the intern's name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the intern's ID?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the intern's email?",
    },
    {
        type: 'input',
        name: 'school',
        message: "What is the intern's school?",
    }
];

const managerQuestions = () => {
    inquirer
        .prompt(managerQs)
        .then((answers) => {
            answers = ;
            employees.push(answers);
            return selectEmployee();
        })
}

const selectEmployee = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'employeeRole',
            message: "Please select which team member you would like to add next, or select 'done' to finish.",
            choices: [
                {
                    name: 'Engineer',
                    value: 'addEngineer',
                },
                {
                    name: 'Intern',
                    value: 'addIntern',
                },
                {
                    name: 'Done',
                    value: 'done',
                },
            ]
        }
    ])
    .then( answer => {
        if (answer.employeeRole === 'addEngineer') {
            engineerQuestions();
        } else if (answer.employeeRole === 'addIntern') {
            internQuestions();
        } else if (answer.employeeRole === 'done') {
            // WRITE FILE!!!
        }
    })
}

// Function to generate file 
function generateFile(data) {
    fs.writeFile(`${path}index.html`, data, (err) => 
    err ? console.err(err) : 'success!');
}
   