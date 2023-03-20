import Manager from "./lib/Manager.js";
import Engineer from "./lib/Engineer.js";
import Intern from "./lib/Intern.js";
import inquirer from "inquirer";
import path from "path";
import fs from "fs";

// const OUTPUT_DIR = path.resolve(__dirname, "output");
// const outputPath = path.join(OUTPUT_DIR, "team.html");

import render from "./src/page-template.js";


// TODO: Write Code to gather information about the development team members, and render the HTML file.

    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What is your role?',
            choices: ['Manager', 'Engineer', 'Intern', 'Finish']
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your Employee ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
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
    });
    function init(){

    }

init();
