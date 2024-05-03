import inquirer from 'inquirer';
import { hub } from "./roomopen.js";



export const desk1Riddle = `
In a world scarred by nuclear fire, I wander the wasteland, never to tire.
I am a beast of burden, helpful and strong, carrying goods and people all day long.

Though once a symbol of sacred cattle, I now serve the survivors of the great battle.
You might find me near settlements or on a farm, but look closely to see my peculiar charm.

For my mutated form is quite a sight, it's not just one head to the left or the right.
When you count the gazes from my gaze, you'll find I watch you in multiple ways.

So if you're seeking me among the debris, how many heads will you count when you see me?
`;

export const searchDesks = async () => {
  const choices = [
    { name: 'Search Desk 1', value: 'desk1' },
    { name: 'Search Desk 2', value: 'desk2' },
  ];

  let continueSearching = true;

  while (continueSearching) {
    const { selectedDesk } = await inquirer.prompt([
      {
        type: 'list',
        name: 'selectedDesk',
        message: 'Which desk would you like to search?',
        choices,
      },
    ]);

    if (selectedDesk === 'desk1') {
      console.log(`You search Desk 1 and find a riddle:\n${desk1Riddle}`);

      const { riddleAnswer } = await inquirer.prompt([
        {
          type: 'input',
          name: 'riddleAnswer',
          message: 'What is your answer to the riddle?',
        },
      ]);

      if (riddleAnswer.trim() === '2') {
        console.log("You know a brahmin when you hear of one! It's two heads for sure. (You decide to remember the number 2)");
      } else {
        console.log("No, that doesn't seem right... let's think again.");
      }
    } else if (selectedDesk === 'desk2') {
      console.log('You search Desk 2. You find nothing on the top, just old paper. Opening the drawers reveals empty stimpaks and Nuka-Cola bottles.');
    }
    const response = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'continueSearching',
        message: 'Would you like to search another desk?',
        default: true,
      },
    ]);

    continueSearching = response.continueSearching; 
  }

  console.log('You leave the corner of the room');
  return;
};
