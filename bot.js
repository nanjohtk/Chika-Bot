const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready. () => {
  console.log('I am ready!');
});

client.on('message, message => {
  if (message.content === 'chika', 'Chika') {
    message.reply('cyka blyat');
    }
});

// KORE WA PEN DESU
Client.login(process.env.BOT_TOKEN);
