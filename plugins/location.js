/* ððē ððĨðððĪ ððððŦð­.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

ððĨðððĪ ððððŦð­ - ððððð
*/

const Amdi = require('../events');
const {MessageType, GroupSettingChange} = require('@adiwajshing/baileys'); // Boredom ðŽ

const Language = require('../language');
const Lang = Language.getString('locate'); // Language supp. ð


    Amdi.applyCMD({pattern: 'locate', fromMe: true,  deleteCommand: false,  desc: Lang.L_DESC, warn: Lang.L_WARN, dontAddCommandList: true}, (async (message, match) => {

        var r_text = new Array ();
        r_text[0] = "degreesLatitude: 24.121231, degreesLongitude: 55.1121221"; // Actually, I don't know where is this place..
        r_text[1] = "degreesLatitude: 8.838637, degreesLongitude: -13.721434"; // U too homie

        var i = Math.floor(2*Math.random()) // Random func. ðĪŠ

        await message.sendMessage(`My Location! ${r_text[i]}`, MessageType.location); // It sends ur location. Cool tho ðą

}));
