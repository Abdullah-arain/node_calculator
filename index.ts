#! /usr/bin/env node 

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((res, rej) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let title = chalkAnimation.rainbow("Let's Start calculation");
    await sleep();
    title.stop();
}
await welcome();
async function askque() {
    let ans = await inquirer.prompt([
        {
            type: "number",
            name: "number_one",
            message: chalk.green("Enter your first number: ")
        },
        {
            type: "number",
            name: "number_two",
            message: chalk.bgCyan("Enter your second number: ")
        },
        {
            type: "list",
            name: "operator",
            choices: ["+", "-", "*", "/"],
            message: chalk.bgGreen("Enter your operator: ")
        }
    ]);
    const { number_one, number_two, operator } = ans;
    if (number_one && number_two && operator) {
        let result = 0;
        if (operator === "+") {
            result = number_one + number_two;
        }
        else if (operator === "-") {
            result = number_one - number_two;
        }
        if (operator === "*") {
            result = number_one * number_two;
        }
        if (operator === "/") {
            result = number_one / number_two;
        }
        console.log("Your result is: ", result);
    }
    else {
        console.log(("Kindly enter your valid input"));
    }
}
async function startAgain() {
    do {
        await askque();
        var playAgain = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: ("Do you want to restart?Press Y or N:")
        });
    } while (playAgain.restart === "y" || playAgain.restart === "Y" || playAgain.restart === "Yes" ||
        playAgain.restart === "yes" || playAgain.restart === "YES");
}
startAgain();

