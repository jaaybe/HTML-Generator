const Employee = require('./Employee');

// extending
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }

    // overriding
    getRole() {
        return "Engineer";
    }

    getGithub() {
        return this.github
    }
};


module.exports = Engineer
