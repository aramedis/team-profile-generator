import Manager from "./lib/Manager.js";
import Engineer from "./lib/Engineer.js";
import Intern from "./lib/Intern.js";
import inquirer from "inquirer";
import path from "path";
import fs from "fs";

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

import render from "./src/page-template.js";

let teamArr = [];
// TODO: Write Code to gather information about the development team members, and render the HTML file.
function init() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What is your role?',
            choices: ['Manager', 'Engineer', 'Intern', 'Finish']
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is your Name?',
            when: (answers) => answers.role !== "Finish"
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your Employee ID?',
            when: (answers) => answers.role !== "Finish"
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            when: (answers) => answers.role !== "Finish"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number?',
            when: (answers) => answers.role === "Manager"
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your github ID?',
            when: (answers) => answers.role === "Engineer"
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is your school name?',
            when: (answers) => answers.role === "Intern"
        },
    ]).then((response) => {
        console.log(response);
        switch (response.role) {
            case "Manager":
                teamArr.push(new Manager(response.name, response.id, response.email, response.officeNumber));
                init();
                break;
            case "Engineer":
                teamArr.push(new Engineer(response.name, response.id, response.email, response.github));
                init();
                break;
            case "Intern":
                teamArr.push(new Intern(response.name, response.id, response.email, response.school));
                init();
                break;
            case "Finish":
                console.log(teamArr);
                break;
        }
    });
}

// function writeToFile(team) {
//     fs.writeFile('team.html', render(teamArr), (error) =>
//     error ? console.error(error) : console.log(`Success!`));
// }


init();
