const fs = require('fs');

const generateManager = function (Manager){
    return `<div class="card text-white bg-dark" style="width: 18rem">
    <div class="card-header mt-3 mb-3">Manager: ${manager.managerName}</div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item m-2">ID: ${manager.managerId}</li>
      <li class="list-group-item m-2">Email: <a href="mailto:${manager.managerEmail}"> ${manager.managerEmail}</a></li>
      <li class="list-group-item m-2">Office: ${manager.managerOfficeNumber}</li>
    </ul>
  </div>`;
}

const generateEngineer = function (Engineer){
    return `<div class="card text-white bg-dark" style="width: 18rem">
    <div class="card-header mt-3 mb-3">Manager: ${engineer.engineerName}</div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item m-2">ID: ${engineer.engineerId}</li>
      <li class="list-group-item m-2">Email: <a href="mailto:${engineer.engineerEmail}"> ${engineer.engineerEmail}</a></li>
      <li class="list-group-item m-2">GitHub: <a href="https://github.com${engineer.engineerGitHub}" target ="_blank">${engineer.engineerGitHub}</a></li>
    </ul>
  </div>`;
}

const generateIntern = function (Intern){
    return `<div class="card text-white bg-dark" style="width: 18rem">
    <div class="card-header mt-3 mb-3">Manager: ${intern.internName}</div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item m-2">ID: ${intern.internId}</li>
      <li class="list-group-item m-2">Email: <a href="mailto:${intern.internEmail}"> ${intern.internEmail}</a></li>
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
        if (role === 'manager'){
            const managerCard = generateManager(employee);
            pageArray.push(managerCard);
        }
        if (role === 'engineer'){
            const engineerCard = generateEngineer(employee);
            pageArray.push(engineerCard);
        }
        if(role === 'intern'){
            const internCard = generateIntern(employee);
            pageArray.push(internCard);
        }
    }
    const employeeCards = pageArray.join("");
    const generateTeam = generateTeamPage(employeeCards);
    return generateTeam;
}