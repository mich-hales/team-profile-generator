const Employee = require('./Employee');

class Engineer extends Employee {
    // github username
    constructor(github) {
        this.github = github;
    }

    getGitHub()

    // overridden to return 'engineer'
    getRole()
}

module.exports = Engineer;