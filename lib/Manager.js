// Manager extends employee, has an office number
import Employee from "./Employee.js";

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        super.role = "Manager";
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

export default Manager;