/* 𝐁𝐲 𝐁𝐥𝐚𝐜𝐤 𝐇𝐞𝐚𝐫𝐭.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

𝐁𝐥𝐚𝐜𝐤 𝐇𝐞𝐚𝐫𝐭 - 𝐑𝐔𝐊𝐈𝐈
*/

const Amdi = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const chalk = require('chalk');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('system_stats');



if (Config.WORKTYPE == 'private') {

    Amdi.applyCMD({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC,  deleteCommand: false}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "```Hi, I'm ᖇᑌKII🥰 I'm online now```\n\n*WhatsApp :* wa.me/94764163878\n\n```Thank You For Using ᖇᑌKII❣```"})

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*↫𝓼𝓴𝔂7↬⦁ᖇᑌKII⦁↫𝓼𝓴𝔂7↬*' })
     }
    }));

    Amdi.applyCMD({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));

    Amdi.applyCMD({pattern: 'version', fromMe: true, desc: Lang.BOT_V,  deleteCommand: false}, (async (message, match) => {    
    
        await message.client.sendMessage(message.jid, 
                `*🧬 RUKII  Version 🧬*\n\n` + 
                '```Installed version :```\n' +
                Lang.version + 
                `\n\nGithub  : https://www.github.com/masterirc`
           , MessageType.text);
            
        }));
}
else if (Config.WORKTYPE == 'public') {

    Amdi.applyCMD({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {

        if (Config.ALIVEMSG == 'default') {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: "```Hi, I m ᖇᑌKII🥰 I m online now```\n\n*WhatsApp :* wa.me/94764163878\n\n```Thank You For Using ᖇᑌKII❣```"})

    }
    else {
            
            var image = await axios.get (Config.ALIVE_LOGO, {responseType: 'arraybuffer'})
       
        await message.client.sendMessage (message.jid, Buffer.from (image.data), MessageType.image, {mimetype: Mimetype.png, caption: Config.ALIVEMSG + '\n\n*↫𝓼𝓴𝔂7↬⦁ᖇᑌKII⦁↫𝓼𝓴𝔂7↬*' })
     }
    }));

    Amdi.applyCMD({pattern: 'sysd', fromMe: true, desc: Lang.SYSD_DESC, dontAddCommandList: true,  deleteCommand: false}, (async (message, match) => {

        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));

    Amdi.applyCMD({pattern: 'version', fromMe: false, desc: Lang.BOT_V}, (async (message, match) => {    
    
        await message.client.sendMessage(message.jid, 
                `*🧬 Rukii  Version 🧬*\n\n` + 
                '```Installed version :```\n' +
                Lang.version + 
                `\n\nGithub  : https://www.github.com/masterirc`
           , MessageType.text);
            
        }));
}
