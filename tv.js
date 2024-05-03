import inquirer from 'inquirer';


class Channel {
  constructor(name, action) {
    this.name = name;
    this.action = action;
  }
  async run() {
    await this.action();
  }
}

class SafetyMeasuresChannel extends Channel {
  constructor() {
    super('Channel 1: Safety measures!', async () => {
      console.log("Lock up your worries and unlock peace of mind, with Wallace's state-of-the-art safe. (You decide to keep number of the channel and its contents)");
    });
  }
}

class WritingTechniquesChannel extends Channel {
  constructor() {
    super('Channel 2: Writing techniques!', async () => {
      console.log("Double the desks, double the productivity. Why settle for one when you can have two!. (You decide to keep number of the channel and its contents)");
    });
  }
}

class RadiationProtectionChannel extends Channel {
  constructor() {
    super('Channel 3: Radiation protection!', async () => {
      console.log("A public service announcement plays. A man stands to cover a mushroom cloud in the distance with his thumb. The announcement ends with the radiation symbol. (You decide to keep number of the channel and its contents)");
    });
  }
}

class ComputingTechniquesChannel extends Channel {
  constructor() {
    super('Channel 4: Computing techniques!', async () => {
      console.log("Get ahead of the curve with RobCo Industries Termlink; the only thing more reliable than our technology is your success!. (You decide to keep number of the channel and its contents)");
    });
  }
}

export const channels = [
  new SafetyMeasuresChannel(),
  new WritingTechniquesChannel(),
  new RadiationProtectionChannel(),
  new ComputingTechniquesChannel(),
];

export const pickChannel = async () => {
  let continueLoop = true;

  while (continueLoop) {
    const { selectedChannel } = await inquirer.prompt([
      {
        type: 'list',
        name: 'selectedChannel',
        message: 'Select a channel to watch:',
        choices: channels.map((channel, index) => ({ name: channel.name, value: index })),
      },
    ]);

    const selected = channels[selectedChannel];
    console.log(`Changing to ${selected.name}`);
    await selected.run(); 

    const response = await inquirer.prompt([
      {
        type: 'list',
        name: 'continueLoop',
        message: 'Would you like to pick another channel?',
        choices: [
          { name: 'Yes', value: true },
          { name: 'No', value: false },
        ],
        default: 0, 
      },
    ]);

    continueLoop = response.continueLoop;
  }

  console.log("Good luck out there, you'll need it.");
  return;
};

export const tv = async () => {
  console.log("You walk up to the TV and sit on the couch, grabbing the remote. Which channel would you like to pick?");
  await pickChannel();
};