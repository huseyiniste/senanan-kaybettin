const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
   const developer = client.emojis.get('756416409327894659')
   const ubuk = client.emojis.get('756416395629297696')
let prefix = 's?'
let müzik = new Discord.RichEmbed()  
.setAuthor(message.author.username, message.author.avatarURL)
.setColor('RANDOM')
.addField('Sonoyuncu Music | Komutlar',`
**s?çal <şarkıismi>** : Belirttiğiniz Şarkıyı Sesli Odada Söyler
**s?duraklat** : Çalan Şarkıyı Durdurur
**s?devam** : Durdurduğunuz Şarkıyı Devam Ettirir
**s?tekrar** : Çalan Şarkıyı Tekrarlar
**s?geç** : Bi Sonraki Şarkıya Geçiş Yapar
**s?istatistik** : Botun Bilgilerini Gösterir
**s?durdur** : Şarkıyı Durdurur 
**s?çek** : Botu Sese Çeker 
**s?ses** : Ses Seviyesini Belirler
**s?oyver** : Bot'a Oy Verirsiniz
-------------------------------------------
 **Yapımcım;** <@508076616048705536>
-------------------------------------------
**Linkler ;  [Davet Et](http://bit.ly/sonoyuncumüsic) | [Oy Ver](https://top.gg/bot/661859713851588629/vote)**
`)
.setImage("https://cdn.discordapp.com/attachments/707972138388422711/766360083344261120/Sonoyuncu_Music_Gif.gif")
.setFooter('Sonoyuncu Music')
 message.channel.send(müzik) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["müzik","yardım","help"], 
  permLevel: 0
};
exports.help = {
  name: 'müzik'
};
//${ubuk}