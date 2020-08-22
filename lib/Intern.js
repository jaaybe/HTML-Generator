const Employee = require('./Employee');

// extending
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }

    getSchool() {
        return this.school
    }

    // overriding
    getRole() {
        return "Intern";
    }

    
};


module.exports = Intern