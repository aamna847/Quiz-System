import inquirer from "inquirer";
const questions = await inquirer.prompt([
    {
        name: "q1",
        type: "list",
        message: "What is typeScript: ",
        choices: [
            "A. A superset of javaScript",
            "B. A statically typed language that compile to plane javaScript",
            "C. A programming language Developed by Microsoft",
            "D. All of the Above",
        ],
    },
    {
        name: "q2",
        type: "list",
        message: "What command complies TypeScript files in a project:",
        choices: ["A. tsc", "B. compile", "C. ts-compile", "D. typescript"],
    },
    {
        name: "q3",
        type: "list",
        message: "What is the purpose of using TypeScript over JavaScript :",
        choices: [
            "A. to make code execution faster",
            "B. To enforce Static Typing and catch error at compile time",
            "C. To enable access to browser specific APIs",
            "D. To reduce the need for testing",
        ],
    },
    {
        name: "q4",
        type: "list",
        message: "Which keyword is used to export elements from a module :",
        choices: ["A. out", "B. export", "C. external", "D. expose"],
    },
    {
        name: "q5",
        type: "list",
        message: "What is the purpose of the Inquirer module in TypeScript application :",
        choices: [
            "A. To handle HTTP requests",
            "B. To create interactive command-line interfaces ",
            "C. To manage dataBase connections",
            "D. To generate documentation",
        ],
    }
]);
let score = 0;
switch (questions.q1) {
    case "D. All of the Above":
        console.log("1. Correct !");
        ++score;
        break;
    default:
        console.log("1. Incorrect !");
}
switch (questions.q2) {
    case "A. tsc":
        console.log("2. Correct !");
        ++score;
        break;
    default:
        console.log("2. Incorrect !");
}
switch (questions.q3) {
    case "B. To enforce Static Typing and catch error at compile time":
        console.log("3. Correct !");
        ++score;
        break;
    default:
        console.log("3. Incorrect !");
}
switch (questions.q4) {
    case "B. export":
        console.log("4. Correct !");
        ++score;
        break;
    default:
        console.log("4. Incorrect !");
}
switch (questions.q5) {
    case "B. To create interactive command-line interfaces ":
        console.log("5. Correct !");
        ++score;
        break;
    default:
        console.log("5. Incorrect !");
}
console.log(`Score:${score}`);
