import inquirer from 'inquirer';
export const congratulatePlayer = () => {
    console.log("***********************************");
    console.log("*                                 *");
    console.log("*  Congratulations!              *");
    console.log("*  You have escaped the room!    *");
    console.log("*                                 *");
    console.log("*  We hope you enjoyed the game. *");
    console.log("*                                 *");
    console.log("*  - Created by Ethan and Chris  *");
    console.log("*                                 *");
    console.log("***********************************");
  };
  
export const escape = async () => {
  const correctCombination = '2077'; 
  let unlocked = false;
  console.log("You walk up to the exit door. It has a 4-digit padlock on it.");
  console.log("Let's crack this bad boy!");
  while (!unlocked) {
    const { attempt } = await inquirer.prompt([
      {
        type: 'input',
        name: 'attempt',
        message: 'Enter a 4-digit code to unlock the door:',
        validate: (input) => {
          return /^\d{4}$/.test(input) ? true : 'Please enter a 4-digit number.'; 
        },
      },
    ]);

    if (attempt === correctCombination) {
      console.log('The padlock clicks open. You have successfully unlocked the door!');
      unlocked = true;     
     congratulatePlayer();
    } else {
      console.log("The lock stays locked. This isn't right. Try again.");
    }
  }
};