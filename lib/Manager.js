const Employee = require('./Employee');

// extending
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;
    }

    // overriding
    getRole() {
        return "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
    
};


module.exports = Manager