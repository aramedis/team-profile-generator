// engineer extends employee, has github
import Employee from "./Employee.js";

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        super.role = "Engineer"
    }

    getGithub() {
        return this.github;
    }
}

export default Engineer;