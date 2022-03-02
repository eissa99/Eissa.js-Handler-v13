const { COOLDOWN } = require('../../JSON/config.json');

module.exports = {
    name: 'ping',
    cooldown: COOLDOWN,
    aliases: [],
    execute(client, message, args) {

        message.reply('Pong.');

    }
}