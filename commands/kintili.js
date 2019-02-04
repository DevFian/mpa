const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  message.guild.members.forEach(member => member.sendMessage(`
**Pesan ini dikirimkan kesemua pengguna Bot Nusantra!!**
▬▬▬▬▬[ RADIO NUSANTARA ]▬▬▬▬▬▬
**Halo teman teman \`Radio Nusantara\`**
Sekarang pindah server & perbaruan system
Ayo join sekarang juga ya teman teman !!
:gear:  System keamanan 100% bot yang bekerja :gear: 
NB: Bot buatan sendiri !!
:flag_id: Hanya di Server Nusantara semua ada.
**Link Invite:** https://discord.gg/jmp49rh
**Image:** https://bit.ly/2TvC88a
**Tag:** @everyone @here 
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
`)).then(msg => {
    msg.delete(120000)
})
}


exports.help = {
  name: "kintil"
}
