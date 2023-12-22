// Example bot.js
const { Client } = require('discord.js');
const client = new Client();

client.once('ready', () => {
  console.log('Bot is ready!');
});

client.login(process.env.BOT_TOKEN);
