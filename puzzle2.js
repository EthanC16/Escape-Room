import inquirer from "inquirer";
import { hub } from "./roomopen.js";

let introMessageDisplayed = false;

function displayIntroMessage() {
    if (!introMessageDisplayed) {
        console.log("You are facing an old cabinet with a padlock on the door. A bobby pin might do the trick.");
        introMessageDisplayed = true;
    }
}

export const bobbyPinPuzzle = async () => {
    displayIntroMessage()
    const { direction } = await inquirer.prompt([
        {
            type: "list",
            name: "direction",
            message: "Which direction should you turn the bobby pin?",
            choices: ["Turn left", "Down the middle", "Turn right"]
        }
    ]);
    switch (direction) {
        case "Turn left":
            console.log("You turn the pin left, but the padlock doesn't budge. Try again.");
            await bobbyPinPuzzle();
            break;
        case "Down the middle":
            console.log("You turned down the middle and feel some resistance. Nearly there.");
            const { secondDirection } = await inquirer.prompt([
                {
                    type: "list",
                    name: "secondDirection",
                    message: "Which direction do you want to turn now?",
                    choices: ["Turn left", "Turn right"]
                }
            ]);
            if (secondDirection === "Turn left") {
                console.log("You turned left, but the padlock doesn't budge. Try again.");
                await bobbyPinPuzzle();
            } else {
                console.log("You turned right and hear a click. The padlock opens");
                console.log("You have successfully unlocked the cabinet");
                console.log("Inside the cabinet, you find a number: 0");
            }
            break;
        case "Turn right":
            console.log("You turned right and hear a click. The padlock opens");
            console.log("You have successfully unlocked the cabinet");
            console.log("Inside the cabinet, you find a number: 0");
            
    }
    console.log("You leave the cabinet")
    return;
}

