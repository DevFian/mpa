const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
  let patrick = new Discord.RichEmbed()
.setAuthor('Music Player Indo', bot.user.avatarURL)
.addField(`
gmk!join = Join Your Voice channel
gmk!leave = Leave Your Voice Channel
gmk!invite = Invite bot to the guild`, '---=---=---=---=---=---=---=---=--- \n [`Klik Disini Untuk Invite`](https://discordapp.com/oauth2/authorize?client_id=564072656714858506&permissions=8&scope=bot)', true)
.setColor("RANDOM")
  .setThumbnail(bicon)
  .setColor('#0aaaeb')
message.channel.send(patrick);
}

exports.help = {
  name: "help"
}
