const Discord = require('discord.js');
exports.run = function(client, message, args) {
	
	if (!message.guild) {
    const embed = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(':warning: Uyarı :warning:', '`geldim` adlı komutu özel mesajlarda kullanamazsın.')
    return message.author.sendEmbed(embed); }
    if (message.channel.type !== 'dm') {
  const embed = new Discord.RichEmbed()
  .setTitle("Afk Modu! \n")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
   
  .setColor("RANDOM")
  
  .addField('Şu Kullanıcı Artık Afk Değil! =>', message.author.username + '#' + message.author.discriminator)
  .setFooter("♥ Kislo ♥", " ")
  message.delete();
  /*
   * Takes a Date object, defaults to current date.
   */

  message.channel.send({embed});
	}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 1
};

exports.help = {
  name: 'geldim',
  description: 'Afk Modundan Cikmani Saglar',
  usage: 'geldim'
};