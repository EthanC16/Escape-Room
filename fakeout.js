// import inquirer from "inquirer"

// console.log("You approach the hanging cage, the skeleton's hollow gaze fixed on the exit.")

// let choices = [
//     "Examine the cage",
//     "Search the pockets",
//     "What is it holding?",
//     "Exit"
// ]
// export const searchSkelton = async() => {
//     if (choices.length > 1) {
//         const {searchChoice} = await inquirer.prompt([
//             {
//             type: "list",
//             name: "searchChoice",
//             message: "What would you like to do?",
//             choices: choices
//             }
        
//         ]).then((answers) => {
//             switch (answers.searchChoice) {
//                 case "Examine the cage":
//                     console.log("You inspect the cage, but find nothing of interest.");
//                     choices = choices.filter(choice => choice !== "Examine the cage");
//                     break;
//                 case "Search the pockets":
//                     console.log("You carefully reach into the trouser pockets and pull out 5 bottlecaps and a stimpak.");
//                     choices = choices.filter(choice => choice !== "Search the pockets");
//                     break;
//                 case "What is it holding?":
//                     console.log("The skeleton's hands grasp tightly around an edition of Grognak the Barbarian.");
//                     choices = choices.filter(choice => choice !== "What is it holding?");
//                     break;
//                 case "Exit":
//                     hub();
//                     return; // Exit the function to avoid further loops
//             }

//             // If choices have at least 2 remaining (including "Exit"), re-run the prompt
//             if (choices.length > 1) {
//                 searchSkelton(); // Recursive call to continue
//             } else {
//                 hub(); // If only one option remains ("Exit"), end the loop
//             }
//         });
//     } else {
//         hub(); // If no valid choices, end the loop
//     }  
// }
// searchSkelton()

import inquirer from "inquirer";
import {hub} from "./roomopen.js"


let choices = [
    "Examine the cage",
    "Search the pockets",
    "What is it holding?",
    "Exit"
];

export const searchSkelton = async () => {
    while (choices.length > 1) {
        const { searchChoice } = await inquirer.prompt([
            {
                type: "list",
                name: "searchChoice",
                message: "What would you like to do?",
                choices: choices
            }
        ]);
        console.log("You approach the hanging cage, the skeleton's hollow gaze fixed on the exit.");

        switch (searchChoice) {
            case "Examine the cage":
                console.log("You inspect the cage, but find nothing of interest.");
                choices = choices.filter(choice => choice !== "Examine the cage");
                break;
            case "Search the pockets":
                console.log("You carefully reach into the trouser pockets and pull out 5 bottlecaps and a stimpak.");
                choices = choices.filter(choice => choice !== "Search the pockets");
                break;
            case "What is it holding?":
                console.log("The skeleton's hands grasp tightly around an edition of Grognak the Barbarian.");
                choices = choices.filter(choice => choice !== "What is it holding?");
                break;
            case "Exit":
                return
        }
    }
};
// here, would not call it here, you would call it in 
// the file where it is being used
// (roomopen.js)
// searchSkelton();
