const fs = require('fs')
const inquirer = require('inquirer')

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the managers name?',
            name: 'managersName',
        },
        {
            type: 'input',
            message: 'What is your employee ID?',
            name: 'employeeID',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'emailAddress',
        },
        {
            type: 'input',
            message: 'What is your office number?',
            name: 'officeNumber',
        }
    ])
    .then((answers) => {
        // creation of manager class
        buildTeam()
    })

function buildTeam() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Do you want to add an engineer an intern or to finish building your team?',
                name: 'buildChoice',
                choices: ['engineer', 'intern', 'finish building team']
            }
        ])
        .then((answers) => {
            switch (answers.buildChoice) {
                case "engineer":
                    addEngineer();
                case "intern":
                    addIntern();
                case "finish building team":
                    finishBuildingTeam();
            }
        })

}

function addEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the engineers name?',
                name: 'engineersName',
            },
            {
                type: 'input',
                message: 'What is your employee ID?',
                name: 'employeeID',
            },
            {
                type: 'input',
                message: 'What is your email address?',
                name: 'emailAddress',
            },
            {
                type: 'input',
                message: 'What is your GitHub username?',
                name: 'userName',
            }
        ])
        .then((answers) => {
            buildTeam()
            
        })
}

function addIntern(){
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the interns name?',
                name: 'internsName',
            },
            {
                type: 'input',
                message: 'What is your employee ID?',
                name: 'employeeID',
            },
            {
                type: 'input',
                message: 'What is your email address?',
                name: 'emailAddress',
            },
            {
                type: 'input',
                message: 'What school did you attend?',
                name: 'schoolName',
            }
        ])
        .then((answers) => {
            buildTeam()
            
        })
}

function finishBuildingTeam(){
    fs.writeFileSync('index.html',generateHTML(answers))
}