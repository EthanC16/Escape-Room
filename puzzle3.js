import inquirer from 'inquirer';
import { hub } from "./roomopen.js";

const checkRadiation = async () => {
    console.log("You turn on the Geiger counter, and it starts beeping, indicating radiation.");
    console.log("You bring the Geiger counter closer to the radiation symbol.");
    console.log("The Geiger counter reads: 7 rad");
  };
  

  export const searchShelves = async () => {
    console.log(`
    ########################################
  (            ..............               )
  (        ......................           )
  (     .....&@..............@@.....        )
  (   .....@@@@@,...........@@@@@,....      )
  (  ....@@@@@@@@@........@@@@@@@@@....     )
  ( ....@@@@@@@@@@@......@@@@@@@@@@@....    )
  ( ...@@@@@@@@@@@..@@@@..@@@@@@@@@@@...    )
  ( ...............@@@@@@................   )
  ( .................@@/................    )
  ( ...............@@@@@@...............    )
  (  .............@@@@@@@@(............     )
  (    .........@@@@@@@@@@@@..........      )
  (      ......@@@@@@@@@@@@@@.......        )
  (        ......................           )
  (             ............                )
    `);
  
    console.log("You see a set of shelves below the radiation symbol. Littered with junk, broken fans, broken cameras. Little boxes of screws and gears, among the junk three items catch your eye: a typewriter, a Geiger counter, and a blow torch (although you don't see any fuel for it).");
  
    let items = [
      { name: 'Typewriter', description: "An old typewriter. It doesn't seem to have been used in years, this won't help you." },
      { name: 'Geiger Counter', description: "A Geiger counter. It's designed to detect radiation levels." },
      { name: 'Blow Torch (no fuel)', description: "A blow torch. It appears to be out of fuel." },
    ];
  
    while (items.length > 0) { 
      const { selectedItem } = await inquirer.prompt([
        {
          type: 'list',
          name: 'selectedItem',
          message: 'Which item would you like to inspect?',
          choices: items.map((item) => ({ name: item.name })),
        },
      ]);
  
      const item = items.find((i) => i.name === selectedItem);
      console.log(`You inspect the ${selectedItem}: ${item.description}`);
  
      if (selectedItem === 'Geiger Counter') {
        await checkRadiation();
      }

      items = items.filter((i) => i.name !== selectedItem);
  
      const { continueInspecting } = await inquirer.prompt([
        {
          type: 'confirm',
          name: 'continueInspecting',
          message: 'Would you like to inspect another item?',
          default: true,
        },
      ]);
  
      if (!continueInspecting) {
        break; 
      }
    }
  
    console.log("You've finished inspecting the shelves.");
    return;
  };