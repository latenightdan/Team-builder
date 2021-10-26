const Employee = require('./Employee')

class Manager extends Employee{
    constructor(name, email){
        super(name);
        this.email = email;
        // this.email = email;

    }
}

module.exports = Manager;