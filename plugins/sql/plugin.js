/* 𝐁𝐲 𝐁𝐥𝐚𝐜𝐤 𝐇𝐞𝐚𝐫𝐭.

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

𝐁𝐥𝐚𝐜𝐤 𝐇𝐞𝐚𝐫𝐭 - 𝐑𝐔𝐊𝐈𝐈
*/

const Config = require('../../config');
const { DataTypes } = require('sequelize');

const PluginDB = Config.DATABASE.define('Plugin', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    url: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

async function installPlugin(adres, file) {
    var Plugin = await PluginDB.findAll({
        where: {url: adres}
    });

    if (Plugin.length >= 1) {
        return false;
    } else {
        return await PluginDB.create({ url: adres, name: file });
    }
}
module.exports = { PluginDB: PluginDB, installPlugin: installPlugin };