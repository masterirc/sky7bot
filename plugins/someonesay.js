/* ππ² ππ₯πππ€ ππππ«π­.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

ππ₯πππ€ ππππ«π­ - πππππ
*/

const Amdi = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
let LOL = Config.WORKTYPE == 'public' ? false : true

const Language = require('../language');
const Lang = Language.getString('ttp');


Amdi.applyCMD({ pattern: 'animesay ?(.*)', fromMe: LOL, desc: Lang.ANIME_DESC ,  deleteCommand: false}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD,MessageType.text, {quoted: message.data});

    var ttinullimage = await axios.get(`https://nekobot.xyz/api/imagegen?type=kannagen&text=${match[1].replace(/Γ/g, "%C3%96").replace(/ΓΆ/g, "%C3%B6").replace(/ΓΌ/g, "%C3%BC").replace(/Γ/g, "%C3%9C").replace(/Δ/g, "%C4%9E").replace(/Δ/g, "%C4%9F").replace(/Ε/g, "%C5%9F").replace(/Ε/g, "%C5%9E").replace(/Γ§/g, "%C3%A7").replace(/Γ/g, "%C3%87").replace(/Δ±/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/Δ°/g, "%C4%B0")}&raw=1`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAP})

}));


Amdi.applyCMD({ pattern: 'changesay ?(.*)', fromMe: LOL, desc: Lang.CHANGE_DESC ,  deleteCommand: false}, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD,MessageType.text, {quoted: message.data});

    var ttinullimage = await axios.get(`https://nekobot.xyz/api/imagegen?type=changemymind&text=${match[1].replace(/Γ/g, "%C3%96").replace(/ΓΆ/g, "%C3%B6").replace(/ΓΌ/g, "%C3%BC").replace(/Γ/g, "%C3%9C").replace(/Δ/g, "%C4%9E").replace(/Δ/g, "%C4%9F").replace(/Ε/g, "%C5%9F").replace(/Ε/g, "%C5%9E").replace(/Γ§/g, "%C3%A7").replace(/Γ/g, "%C3%87").replace(/Δ±/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/Δ°/g, "%C4%B0")}&raw=1`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAP})

}));


Amdi.applyCMD({ pattern: 'trumpsay ?(.*)', fromMe: LOL, desc: Lang.TRUMP_DESC,  deleteCommand: false }, (async (message, match) => {

    if (match[1] === '') return await message.client.sendMessage(message.jid,Lang.NEED_WORD,MessageType.text, {quoted: message.data});

    var ttinullimage = await axios.get(`https://nekobot.xyz/api/imagegen?type=trumptweet&text=${match[1].replace(/Γ/g, "%C3%96").replace(/ΓΆ/g, "%C3%B6").replace(/ΓΌ/g, "%C3%BC").replace(/Γ/g, "%C3%9C").replace(/Δ/g, "%C4%9E").replace(/Δ/g, "%C4%9F").replace(/Ε/g, "%C5%9F").replace(/Ε/g, "%C5%9E").replace(/Γ§/g, "%C3%A7").replace(/Γ/g, "%C3%87").replace(/Δ±/g, "%C4%B1").replace(/i/g, "%69").replace(/"/g, "%22").replace(/Δ°/g, "%C4%B0")}&raw=1`, { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.png, caption: Config.CAP})

}));
