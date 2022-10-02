const fs = require('fs');

const generateManager = function (manager){
    return `<div class="card text-white bg-dark" style="width: 18rem">
    <div class="card-header mt-3 mb-3">Manager: ${manager.name}</div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item m-2">ID: ${manager.id}</li>
      <li class="list-group-item m-2">Email: <a href="mailto:${manager.email}"> ${manager.email}</a></li>
      <li class="list-group-item m-2">Office: ${manager.officeNumber}</li>
    </ul>
  </div>`;
}

const generateEngineer = function (engineer){
    return `<div class="card text-white bg-dark" style="width: 18rem">
    <div class="card-header mt-3 mb-3">Engineer: ${engineer.name}</div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item m-2">ID: ${engineer.id}</li>
      <li class="list-group-item m-2">Email: <a href="mailto:${engineer.email}"> ${engineer.email}</a></li>
      <li class="list-group-item m-2">GitHub: <a href="https://github.com/${engineer.gitHub}" target ="_blank">${engineer.gitHub}</a></li>
    </ul>
  </div>`;
}

const generateIntern = function (intern){
    return `<div class="card text-white bg-dark" style="width: 18rem">
    <div class="card-header mt-3 mb-3">Intern: ${intern.name}</div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item m-2">ID: ${intern.id}</li>
      <li class="list-group-item m-2">Email: <a href="mailto:${intern.email}"> ${intern.email}</a></li>
      <li class="list-group-item m-2">School: ${intern.school}</li>
    </ul>
  </div>`
}

// array
renderTeam = (data) =>{
    pageArray = [];

    for (var i=0; i < data.length; i++){
        const employee = data[i];
        const role = employee.getRole();
        if (role === 'Manager'){
            const managerCard = generateManager(employee);
            pageArray.push(managerCard);
        }
        if (role === 'Engineer'){
            const engineerCard = generateEngineer(employee);
            pageArray.push(engineerCard);
        }
        if(role === 'Intern'){
            const internCard = generateIntern(employee);
            pageArray.push(internCard);
        }
    }
    const employeeCards = pageArray.join("");
    const generateTeam = generateTeamPage(employeeCards);
    return generateTeam;
}

 const generateTeamPage = function (employeeCards){
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
        rel="stylesheet" href="./style.css" />
      <title>Employee Profiles</title>
    </head>
    
    <body>
      <header>
        <nav class="navbar navbar-dark bg-dark">
          <div class="container-fluid d-flex justify-content-center">
            <span class="navbar-brand m-5 h1">My Team</span>
          </div>
        </nav>
      </header>
      <main>
        ${employeeCards}
      </main>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js">
      </script>
      <script src="../index.js"></script>
    </body>
    
    </html>`;
 };

 module.exports = renderTeam;