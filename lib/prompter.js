const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const fs = require('fs');
const generateHtml = require('./generateHtml')

class Prompter {
    constructor(){
       this.staff =[];
    }
    //first you are greeted: hello! this is team tracker!
//Every team has a leader! What is your team manager's name??!!
//what is their email? 
//what is their ID number??
//what is their office number????!!

//ok great. Now, do you have any other team members??? if no, generate html block with manager's info
    managerInfo(){
        inquirer
        .prompt([{
            type: 'text',
            name: "name",
            message: "what is your manager's name?" 
        },
        {
            type: 'text',
            name: "email",
            message: "what is your manager's email?"  
        },
        {
            type: 'text',
            name: "id",
            message: "Your manager got an ID? What's the number?!"
        },
        {
            type: 'text',
            name: "office",
            message: "What is their office number?!?!"
        },
        {
            type: 'confirm',
            name: 'more',
            message: "any more?",
            default: true
        }
     ]).then(answers =>{
            this.manager = new Manager(answers.name, answers.email, answers.id, answers.office)
            // console.log(this.manager)
            if(answers.more){
                
            } else {
                this.staff.push(this.manager);
                return this.generatePage(this.manager); 
            }
            
        });
       
           
        
    };
    generatePage = (info => {
console.log(info);
const balls = generateHtml(info)
fs.writeFile('index.html', balls, err =>{
    if (err) throw new Error(err);
    console.log('Title updated. Now fill out the rest');
});
    });
  
};


module.exports = Prompter;