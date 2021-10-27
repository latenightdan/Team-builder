const Employee = require('./Employee')

class Manager extends Employee{
    constructor(name, email, id, officeNumber){
        super(name);
        this.email = email;
        this.id = id;
        this.role = 'Manager'
        this.officeNumber = officeNumber;

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
            getOfficeNum(){
                return this.officeNumber;
            }
            getAll(){
                return {
                    Name: this.name,
                    Id: this.id,
                    Role: this.role,
                    OfficeNumber: this.officeNumber
                };
                
            }
            
}

module.exports = Manager;