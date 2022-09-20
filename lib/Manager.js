const Employee = require('./Employee');

class Manager extends Employee {
    contructor(officeNumber) {
        this.officeNumber = officeNumber;
    }

    // overridden to return 'manager'
    getRole()

}

module.exports = Manager;