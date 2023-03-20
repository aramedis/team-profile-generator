// intern extends employee and has a school property
import Employee from "./Employee.js";

class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email);
        this.school = school;
        super.role = "Intern"
    }

    getSchool() {
        return this.school;
    }
}

export default Intern;