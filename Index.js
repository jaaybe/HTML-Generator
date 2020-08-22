const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./lib/generatePage');
const teamMembers = []

// ******** MANAGER ********
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the team manager? (Required)',
      validate: function(title) {
        if (title === '') {
          console.log('\n Team Manager Name is required.')
          return false;
        }

        return true;
      }
    },
    {
      type: 'input',
      name: 'employeeId',
      message: "Please enter the team manager's Employee ID",
      validate: function(id) {
        if (typeof parseInt(id) != 'number' || id <= 0) {
          console.log('please enter a valid number greater than zero')
          return false;
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "Please enter the team manager's email address",
      validate: function(email) {
        if (!email.includes ('@') ) {
          console.log('please enter a valid email address')
          return false;
        } 
        return true;
      }
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "Please enter the team manager's office number"
    },
  ])

  .then(function (answers) {

    var manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber) 
    teamMembers.push(manager);
    determineEmployee();    
  });

// ******** ENGINEER ********
  function addEngineer() {
    inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the engineer? (Required)',
      validate: function(title) {
        if (title === '') {
          console.log('\n Team Manager Name is required.')
          return false;
        }

        return true;
      }
    },
    {
      type: 'input',
      name: 'employeeId',
      message: "Please enter the Engineer's Employee ID",
      validate: function(id) {
        if (typeof parseInt(id) != 'number' || id <= 0) {
          console.log('please enter a valid number greater than zero')
          return false;
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "Please enter the Engineer's email address",
      validate: function(email) {
        if (!email.includes ('@') ) {
          console.log('please enter a valid email address')
          return false;
        } 
        return true;
      }
    },
    {
      type: 'input',
      name: 'github',
      message: "Please enter the Engineer's Github User Name"
    },
  ])

  .then(function (answers) {

    var engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.github) 
    teamMembers.push(engineer);
    determineEmployee();    
  });
  }

  // ******** INTERN ********
  function addIntern() {
    inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the Intern? (Required)',
      validate: function(title) {
        if (title === '') {
          console.log('\n Intern Name is required.')
          return false;
        }

        return true;
      }
    },
    {
      type: 'input',
      name: 'employeeId',
      message: "Please enter the Intern's Employee ID",
      validate: function(id) {
        if (typeof parseInt(id) != 'number' || id <= 0) {
          console.log('please enter a valid number greater than zero')
          return false;
        }
        return true;
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "Please enter the Intern's email address",
      validate: function(email) {
        if (!email.includes ('@') ) {
          console.log('please enter a valid email address')
          return false;
        } 
        return true;
      }
    },
    {
      type: 'input',
      name: 'school',
      message: "Please enter the Intern's School"
    },
  ])

  .then(function (answers) {

    var intern = new Intern(answers.name, answers.employeeId, answers.email, answers.school) 
    teamMembers.push(intern);
    determineEmployee();    
  });
  }

  function determineEmployee() {
    inquirer
    .prompt([
      {
        type: 'list',
        name: 'choice',
        choices: ['Engineer', 'Intern', 'Done'],
        message: 'Please choose if you would like to add an Engineer or Intern, or if you are done.'
      }
    ])
    .then(function (answers) {
      if (answers.choice === 'Engineer') {
        addEngineer()
      } else if (answers.choice === 'Intern') {
        addIntern()
      } else {
        createHTML()
      }
    })
  }

  function createHTML() {
    fs.writeFile('./dist/team.html', generatePage(teamMembers), function (err) {
      if (err) {
        return console.log(err);
      }

      console.log('HTML file created!');
    });
  }