const Employee = require('./Employee')

class Engineer extends Employee{
    constructor(name, email, id, github){
        super(name);
        this.email = email;
        this.id = id;
        this.role = 'Engineer'
        this.github = github;

        // this.email = email;

    }
    getName(){
        return this.name;
            }
            getId(){
        return this.id;
            }
            getEmail(){
        return this.email;
            }
            getRole(){
        return this.role;
            }
            getGit(){
                return this.github;
            }
}

module.exports = Engineer;