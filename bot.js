const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("603602667301765121")
setInterval(function() {
channel.send(`ana bot`);
}, 30)
})

client.login(process.env.BOT_TOKEN);