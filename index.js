const inquirer = require("inquirer");


const BuildTeamPage = require("./src/PageBuilder");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/intern");

const managers= [];
const engineers = [];
const interns = [];

const doMenuQuestions = () => {
    inquirer.prompt([
        {
          type: 'list',
          message: 'What do you want to do?',
          name: 'option',
          choices:['Add a Manager','Add an Engineer','Add an Intern','BuildTeamPage']
        },
        
      ])
      .then((response) =>{
        switch(response.option){
                  case 'Add a Manager':
                    doManagerQuestions();
                    break;
                  case 'Add an Engineer':
                    doEngineerQuestions();
                    break;
                    case 'Add an Intern':
                    doInternQuestions();
                    break;
                    case 'BuildTeamPage':
                    BuildTeamPage(managers,engineers,interns);
                    break;
                    default:
                    console.log('Invalid option');
                    break;
        }
    })
}

    const doManagerQuestions = () =>{
        inquirer.prompt([
            {
                type: 'input',
                message: 'Enter employee id of the manager',
                name:'id',
        
            },
            {
                type: 'input',
                message: 'Enter name of the manager',
                name:'name',
            },
            {
                type: 'input',
                message: 'Enter email of the manager',
                name:'email',
            },
            {
                type: 'input',
                message: 'Enter ph no of the manager',
                name:'phone',
            },
        ])
        .then((response) =>{
            //create a new manager object
            const manager = new Manager(response.id,response.name,response.email,response.phone);
            //Add array of managers
            managers.push(manager);
            //Show menu again
            doMenuQuestions();
        })
    }

    const doEngineerQuestions = () =>{
        inquirer.prompt([
            {
                type: 'input',
                message: 'Enter employee id of the engineer',
                name:'id',
        
            },
            {
                type: 'input',
                message: 'Enter name of the engineer',
                name:'name',
            },
            {
                type: 'input',
                message: 'Enter email of the engineer',
                name:'email',
            },
            {
                type: 'input',
                message: 'Enter github of the engineer',
                name:'github',
            },
        ])
        .then((response) =>{
            //create a new manager object
            const engineer = new Engineer(response.id,response.name,response.email,response.phone);
            //Add array of managers
            engineers.push(engineer);
            //Show menu again
            doMenuQuestions();
        })
    }

    const doInternQuestions = () =>{
        inquirer.prompt([
            {
                type: 'input',
                message: 'Enter employee id of the intern',
                name:'id',
        
            },
            {
                type: 'input',
                message: 'Enter name of the intern',
                name:'name',
            },
            {
                type: 'input',
                message: 'Enter email of the intern',
                name:'email',
            },
            {
                type: 'input',
                message: 'Enter school of the intern',
                name:'school',
            },
        ])
        .then((response) =>{
            //create a new manager object
            const intern = new Intern(response.id,response.name,response.email,response.phone);
            //Add array of managers
            interns.push(intern);
            //Show menu again
            doMenuQuestions();
        })
    }

    doMenuQuestions()






    










