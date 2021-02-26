const Discord = require("discord.js");
const client = new Discord.Client();
const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MTg1OTcxMzg1MTU4ODYyOSIsImJvdCI6dHJ1ZSwiaWF0IjoxNjEzMjMwNjMwfQ.8H3Ooc6u4NjnRgS1K_eKPUk-HH-UwWlKUBHAtaVYgiU', client);
exports.run = (client, message) => {
    dbl.hasVoted(message.author.id).then(voted => { 
        if (!voted) {
            message.channel.send( new Discord.RichEmbed()
.setTitle("UYARI")
.setColor("RANDOM")
.setFooter(client.user.username)
.setThumbnail(client.user.avatarURL)
.setDescription("Bu Komutu Kullanabilmek için Botumuza Oy Vermelisiniz!")
.addField("Oy Vermek için :", `[Bana Tıkla!](https://top.gg/bot/661859713851588629/vote)`)
)

        } else {
            message.channel.send("Rolün Başarıyla Verildi!");
            message.member.addRole("805496282885783582")

        }
    })
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["oyverdim"],
  permLevel: 0,
   
};

exports.help = {
  name: 'oy-verdim',
 
};