const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const fs = require('fs');
const generateHtml = require('./generateHtml')

class Prompter {
    constructor() {
        this.staff = [];
    }
    //first you are greeted: hello! this is team tracker!
    //Every team has a leader! What is your team manager's name??!!
    //what is their email? 
    //what is their ID number??
    //what is their office number????!!

    //ok great. Now, do you have any other team members??? if no, generate html block with manager's info
    managerInfo() {
        console.log(this.staff);
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
            ]).then(answers => {
                this.manager = new Manager(answers.name, answers.email, answers.id, answers.office)
                // console.log(this.manager)
                if (answers.more) {
                    //ask what type of employees you have
                    //if intern go to intern, if engineer etc.
                    //after filling it out, add to arry of dat to send out.
                    this.staff.push(this.manager);
                    this.more(this.staff);

                } else {
                    console.log("Cool, check out your manager's new card")
                    
                    this.staff.push(this.manager);
                    
                    return this.generatePage(this.staff);
                }

            });

            this.more = (answers => {
                inquirer.prompt([
                    {
                        type: 'list',
                        message: 'Ok, what is their station?',
                        name: 'status',
                        choices: ['Manager', 'Engineer', 'Intern']
                    }
                ]).then(({ status }) => {
                    switch(status){
                       case 'Manager':
                        this.managerInfo();
                        break;
                        case 'Engineer':
                            this.engineerInfo(answers);
                        break;
                        case 'Intern':
                            console.log('Intern');
                            this.internInfo(answers)
                        break;
                    }
                })
            
            });
           
    };

internInfo(staff){
    console.log(staff);
    inquirer
    .prompt([{
        type: 'text',
        name: "name",
        message: "what is your intern's name?"
    },
    {
        type: 'text',
        name: "email",
        message: "what is your intern's email?"
    },
    {
        type: 'text',
        name: "id",
        message: "Your intern got an ID? What's the number?!"
    },
    {
        type: 'text',
        name: "school",
        message: "What school did they go to?!?!"
    },
    {
        type: 'confirm',
        name: 'more',
        message: "any more?",
        default: true
    }
    ]).then(answers => {
        this.intern = new Intern(answers.name, answers.email, answers.id, answers.school)
        // console.log(this.manager)
        if (answers.more) {
            //ask what type of employees you have
            //if intern go to intern, if engineer etc.
            //after filling it out, add to arry of dat to send out.
            this.staff.push(this.intern);
            this.more(this.staff);

        } else {
            console.log("Cool, check out your team's new cards")
            
            this.staff.push(this.intern);
            
            return this.generatePage(this.staff);
        }

    });

};

engineerInfo(staff){
    console.log(staff);
    inquirer
    .prompt([{
        type: 'text',
        name: "name",
        message: "what is your engineer's name?"
    },
    {
        type: 'text',
        name: "email",
        message: "what is your engineer's email?"
    },
    {
        type: 'text',
        name: "id",
        message: "Your engineer got an ID? What's the number?!"
    },
    {
        type: 'text',
        name: "github",
        message: "They got github?!?! What is it???"
    },
    {
        type: 'confirm',
        name: 'more',
        message: "any more?",
        default: true
    }
    ]).then(answers => {
        this.engineer = new Engineer(answers.name, answers.email, answers.id, answers.github)
        // console.log(this.manager)
        if (answers.more) {
            //ask what type of employees you have
            //if intern go to intern, if engineer etc.
            //after filling it out, add to arry of dat to send out.
            this.staff.push(this.engineer);
            this.more(this.staff);

        } else {
            console.log("Cool, check out your team's new cards")
            
            this.staff.push(this.engineer);
            
            return this.generatePage(this.staff);
        }

    });

};


    generatePage = (info => {
        // console.log(info);
        const balls = generateHtml(info)
        fs.writeFile('index.html', balls, err => {
            if (err) throw new Error(err);
            console.log('Title updated. Now fill out the rest');
        });
    });

};


module.exports = Prompter;