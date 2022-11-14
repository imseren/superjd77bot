
// THE CODEEE!!!

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
require("dotenv").config()

// the client is on - serem#0058
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  const { Client, GatewayIntentBits, ActivityType } = require('discord.js');
  client.user.setPresence({
    activities: [{ name: `Dylan farted`, type: ActivityType.Watching }], // dylans status for the bot "watching dylan farted"
    status: 'idle',
  });
});


client.login('MTA0MTQyMzY3NjE0NDM1NzM3Ng.Gfl_Tl.3LekRB8ZCrJjhMTtFqvYe-DvTORYUe4XRCcCxU');

// client.login for the bot token. 

