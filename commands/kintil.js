const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
 message.guild.members.forEach(member => member.sendMessage(`
**Pesan ini dikirimkan kesemua pengguna Bot Nusantra!!**
▬▬▬▬▬[ SERVER NUSANTARA ]▬▬▬▬▬▬
**Cari teman? Bermain game? membuat Crew?
Mencari voucher game murah? hadiah gratis?**

**Feature Server Kami:**
• Menyediakan toko voucher game dan sosmed.
• Menyediakan hadiah - hadiah gratis tiap minggu.
• Menyediakan ruangan gamer untuk kalian.
• Membuat hati anda senang guys.
• Spot untuk berbincang dan berkumpul
• Menyediakan system keamanan

:gear:  System keamanan 100% bot yang bekerja :gear: 
NB: Bot buatan sendiri !!

:flag_id: Hanya di Server Nusantara semua ada.
**Link Invite:** https://discord.gg/X32m39p
**Image:** https://bit.ly/2TvC88a
**Tag:** @everyone @here 
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
`)).then(msg => {
    msg.delete(120000)
})


exports.help = {
  name: "kintil"
}
