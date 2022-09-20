// The first class is an Employee parent class with the following properties and methods:
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
   
    getName()
    getID()
    getEmail()
    // Returns 'Employee'
    getRole()
}

module.exports = Employee;
