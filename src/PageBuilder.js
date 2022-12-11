const fs = require('fs');

const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

const BuildTeamPage = (managers,engineers,interns) =>{
    let html = fs.readFileSync('./template/index.html', 'utf8');
    if(html){
        let managerHtml = '';
        managers.forEach(manager=>{
            managerHtml +=`<div class="card">
            <h2>${manager.name}</h2>
            <p>Employee Id:${manager.id}</p>
            <p>Email:<a href ="mailto:${manager.email}">${manager.email}</a></p>
            <p>Office Number:${manager.phone}</p>
            </div>`;
        })

        let engineerHtml = '';
        engineers.forEach(engineer =>{
            engineerHtml +=`<div class="card">
            <h2>${engineer.name}</h2>
            <p>Employee Id:${engineer.id}</p>
            <p>Email:<a href ="mailto:${engineer.email}">${engineer.email}</a></p>
            <p>GitHub:${engineer.github}</p>
            </div>`;
        })

        let internHtml = '';
        interns.forEach( intern =>{
            internHtml +=`<div class="card">
            <h2>${intern.name}</h2>
            <p>Employee Id:${intern.id}</p>
            <p>Email:<a href ="mailto:${intern.email}">${intern.email}</a></p>
            <p>School:${intern.school}</p>
            </div>`;
        })

        html = html.replace(/<!----Managers-->/,managerHtml);
        console.log(managerHtml);
        html = html.replace('<!----Engineers-->',engineerHtml);
        console.log(engineerHtml);
        html = html.replace('<!----Interns-->',internHtml);
        console.log(internHtml);

        fs.writeFileSync('./dist/team.html',html,'utf8');
        console.log('Successfully generated');


    }


}


module.exports = BuildTeamPage