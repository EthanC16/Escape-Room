import {tv, pickChannel} from "./tv.js";
import {searchSkelton} from "./fakeout.js";
import {terminalHackingPuzzle} from "./puzzle4.js";
import { bobbyPinPuzzle } from "./puzzle2.js";
import { searchDesks } from "./puzzle1.js";
import { searchShelves } from "./puzzle3.js";
import {escape, congratulatePlayer} from "./exit.js";
import inquirer from "inquirer";

console.log("You enter the dimly lit room, a number of things catch your eye.")
console.log("To your right there is a small 'Radiation King' branded television, flicking through 4 different interesting channels.")
console.log("Against the left wall is an old metal cabinet, locked shut with a large rusted padlock.")
console.log("To your right, you notice a skeleton in a cage hanging from the roof, you deduce that you could probably reach through the bars to search its pockets")
console.log("In the south western corner of the room, you notice a large radiation symbol, with some shelves below it. There are a numerous amount of gadgets on the shelves")
console.log("A top a battered desk against the far wall in front of you, sits a terminal that might just power on.")
console.log("In the north western corner there is a two desks, both littered with papers and oddities. One draw on the right hand side is slightly ajar.")

export let hubArray = [
    { name: 'TV', action: async () => await tv() },
    { name: 'Locked cabinet', action: async () => await bobbyPinPuzzle() },
    { name: 'Old skeleton', action: async () => await searchSkelton() },
    { name: 'Desks', action: async () => await searchDesks() },
    { name: 'A terminal', action: async () => await terminalHackingPuzzle() },
    { name: 'Shelves', action: async () => await searchShelves() },
];


export const hub = async () => {
  while (hubArray.length > 0) {
        const choices = hubArray.map((option) => option.name);

        const { hubChoice } = await inquirer.prompt([
            {
                type: "list",
                name: "hubChoice",
                message: "What would you like to do?",
                choices: choices,
            },
        ]);

        const selectedOption = hubArray.find((option) => option.name === hubChoice);

        if (selectedOption && selectedOption.action) {
            await selectedOption.action(); 
            hubArray = hubArray.filter((option) => option.name !== hubChoice); 
        }

        if (hubArray.length === 0) {
            console.log("Time to escape from this dusty room.");
            escape(); 
        }
    }
};
// here\/\/\/\/\/\
hub()
// /\/\/\/\/\/
// that should be there to start the code, array is just the array thats used for information of what to look through when hub is called