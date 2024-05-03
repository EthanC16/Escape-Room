import inquirer from "inquirer";
import { hub } from "./roomopen.js";


const passwords = ["fallout", "ghoul", "vault", "deathclaw", "mutant", "bobblehead", "dogmeat", "synth"]

const correctPassword = passwords[Math.floor(Math.random() * passwords.length)];

export const terminalHackingPuzzle = async () => {
    console.log("Welcome to ROBCO Industries (TM) Termlink");
    console.log("Password Required");

    let passwordAccepted = false;

    while (!passwordAccepted) {
        const { guessedPassword } = await inquirer.prompt([
            {
                type: "list",
                name: "guessedPassword",
                message: "You must guess the correct password to unlock the terminal:",
                choices: passwords
            }
        ]);

        if (guessedPassword.toLowerCase() === correctPassword.toLowerCase()) {
            console.log("Password accepted")
            console.log("The terminal flashes open and you notice an entry named code")
            console.log("You open the entry to see the number 7")
            passwordAccepted = true;
        } else {
            console.log("Entry denied");
        }
    }
    console.log("You return back to the room")
    return;
}

