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
        name: 'officeNumber',
        message: "What is the manager's office number?",
    }
];

// Engineer Questions
const engineerQs = [
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
        name: 'github',
        message: "What is the engineer's GitHub username?",
    }
];

// Intern Questions
const internQs = [
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
            answers = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            employees.push(answers);
            return selectEmployee();
        })
};

const engineerQuestions = () => {
    inquirer
        .prompt(engineerQs)
        .then((answers) => {
            answers = new Engineer(answers.name, answers.id, answers.email, answers.github);
            employees.push(answers);
            return selectEmployee();
        })
};

const internQuestions = () => {
    inquirer
        .prompt(internQs)
        .then((answers) => {
            answers = new Intern(answers.name, answers.id, answers.email, answers.school);
            employees.push(answers);
            return selectEmployee();
        })
};


// Gives the user an option to add another type of employee, or finish and generate the html page
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
    fs.writeFile(`./dist/index.html`, data, (err) => 
    err ? console.err(err) : "Your team's profile has been generated!");
}
   