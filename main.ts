#! /usr/bin/env node

import inquirer from "inquirer";

let task1 = ["biryani", "cake", "cold drink"];
let condition = true;

while (condition){
let party= await inquirer.prompt(
    [
        {
            name:"todo",
            type:"input",
            message:"which thing need to celebrate birthday party?"
        },

        {
            name:"themeBaseParty",
            type:"confirm",
            message:"do you want anything more?",
            default:"true"
        }
    ]
);


task1.push(party.todo);
condition = party.themeBaseParty
console.log(task1);
};

