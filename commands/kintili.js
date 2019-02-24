

const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
 message.guild.members.forEach(member => member.sendMessage(`
▬▬▬▬▬▬▬[ Verter Room ]▬▬▬▬▬▬▬▬
Maaf mengganggu teman teman, ayo join serverku
Banyak giveaway dan banyak video tutorial disana!! 😍
**Link:** https://discord.gg/Ug2QVNK
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
`))
}

exports.help = {
  name: "help"
}
