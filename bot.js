const Discord = require('discord.js');
const client = new Discord.Client();
const { botToken, prefix, ownerID } = require('./config.json');

// ready command
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag} in ${client.guilds.size} servers!`);
});

// message command + ban command
client.on('message', async message => {
    if(message.author.id != ownerID) return message.reply("you're not the Owner of this Guild to use this command!");
    if(message.content.startsWith(`${prefix}banall`)) {
    message.guild.members.filter(member => member.bannable).forEach(member => {member.ban()});
    }
});

client.login(botToken);
