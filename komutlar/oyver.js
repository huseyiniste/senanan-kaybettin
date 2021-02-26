const Discord = require('discord.js');

exports.run = async (client, message, args) => {
const darknesyoutube = new Discord.RichEmbed();
darknesyoutube.setDescription("🔔 [Oy Vermek İçin Tıkla](https://top.gg/bot/661859713851588629/vote)")

message.channel.send(darknesyoutube)
}
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['oy-ver'],
permLevel: 0
}

exports.help = {
name: 'oyver',

} 