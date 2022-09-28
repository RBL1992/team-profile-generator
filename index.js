const Manager = require('./library/manager');
const Engineer = require('./library/engineer');
const Intern = require('./library/intern');
const pageLayout = require('./source/pageLayout');
const renderTeamHtml = require('./distributable/index.html');
const path = require('path');
const fs = require('fs')
const inquirer = require('inquirer')

const myTeam = [];

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
            name: 'employeeId',
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
        const manager = new Manager(answers.managersName, answers.employeeId, answers.emailAddress, answers.officeNumber);
        myTeam.push(manager);
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
                    break;
                case "intern":
                    addIntern();
                    break;
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
                name: 'employeeId',
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
            const addEngineer = new Engineer(answers.engineersName, answers.employeeId, answers.emailAddress, answers.userName);
            myTeam.push(addEngineer);
            buildTeam();
        })
}

function addIntern() {
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
                name: 'employeeId',
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
            const intern = new Intern(answers.internsName, answers.employeeId, answers.emailAdress, answers.schoolName);
            myTeam.push(intern);
            buildTeam()

        })
}

function finishBuildingTeam(fileName, answers) {
    fs.writeFile(fileName, answers, (err)=>{
        err ? console.log(err) : console.log('Created Team!')
    }) 
        //     if (err) {
        //         console.log(err);
        //     } else {
        //         console.log('Team profile has been created!');
        //     };
        // })
}

// // TODO: Create a function to initialize app
// const init = () => {
//     return inquirer.prompt().then((answers)=>{
//         writeToFile('generatedTeam.html',generateteam(answers))
//     })
// }

// // Function call to initialize app
// init();
