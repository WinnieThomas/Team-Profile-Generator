const inquirer = require("inquirer");

const manager = require("../lib/Manager");
const engineer = require("../lib/Engineer");
const intern = require("../lib/intern");

const BuildTeamPage = require("./PageBuilder");

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
    })}

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
            const manager = new Manager(response.id,reponse.name,reponse.email,response.phone);
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
                message: 'Enter github of the manager',
                name:'github',
            },
        ])
        .then((response) =>{
            //create a new manager object
            const engineer = new Engineer(response.id,reponse.name,reponse.email,response.phone);
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
                message: 'Enter school of the manager',
                name:'school',
            },
        ])
        .then((response) =>{
            //create a new manager object
            const intern = new Intern(response.id,reponse.name,reponse.email,response.phone);
            //Add array of managers
            interns.push(intern);
            //Show menu again
            doMenuQuestions();
        })
    }

    






    









