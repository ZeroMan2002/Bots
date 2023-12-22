require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!'; // Command prefix

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (message) => {
  // Ignore messages from bots
  if (message.author.bot) return;

  // Check if the message starts with the command prefix
  if (message.content.startsWith(prefix)) {
    // Split the message into command and arguments
    const [command, ...args] = message.content.slice(prefix.length).split(' ');

    // Check the command
    if (command === 'ping') {
      message.reply('Pong!');
    } else if (command === 'suggest') {
      // Handle suggestion command
      const suggestion = args.join(' ');
      if (suggestion) {
        // Do something with the suggestion (e.g., send it to another channel)
        const suggestionChannel = client.channels.cache.get('CHANNEL_ID'); // Replace CHANNEL_ID with your channel ID
        suggestionChannel.send(`New Suggestion: ${suggestion}`);
        message.reply('Thanks for your suggestion!');
      } else {
        message.reply('Please provide a suggestion.');
      }
    }
  }
});

// Login to Discord with your bot token
client.login(process.env.BOT_TOKEN);
