let handler = async (m, { conn, args }) => {
  let name = m.fromMe ? conn.user : conn.contacts[m.sender]
  let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
  let users = m.mentionedJid.filter(u => !(u == ownerGroup || u.includes(conn.user.jid)))
  for (let user of users) if (user.endsWith('@s.whatsapp.net')) await conn.groupRemove(m.chat, [user])

conn.reply(m.chat, `
*「 ANTI LINK GROUP 」*

Terdeteksi *${name.vnmae || name.notify || name.name || ('+' + name.jid.split`@`[0])}* mengirim link group!

Sekali lagi kirim link gc kamu akan dikick!
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.command = new RegExp
handler.customPrefix = /^https://chat.whatsapp.com/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = true

handler.fail = null

module.exports = handler
