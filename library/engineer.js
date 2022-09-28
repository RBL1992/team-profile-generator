const Manager = require("./manager");

class Engineer extends Manager {
    constructor(name, id, email, gitHub){
        super(name, id, email);
        this.gitHub = gitHub;
    }
    getGitHub(){
        return this.gitHub;
    }
    getRole(){
        return 'Engineer';
    }
}
module.exports = Engineer;