
const Employee = require('./Employee')

class Intern extends Employee{
    constructor(name, email, id, school){
        super(name);
        this.email = email;
        this.id = id;
        this.role = 'Intern'
        this.school = school;

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
            getSchool(){
                return this.school;
            }
}

module.exports = Intern;