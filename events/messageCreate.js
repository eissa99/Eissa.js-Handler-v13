const { PREFIX } = require('../JSON/config.json');
const { Collection } = require('discord.js');
const delay = new Collection();
const ms = require('ms');

module.exports = {
    name: 'messageCreate',
    execute(client, message) {
        if (!message.content.startsWith(PREFIX) || message.author.bot) return;
        const args = message.content.slice(PREFIX.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();
        try {
            let commandFiles = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));
            if (!commandFiles) return;
            if (commandFiles) {
                if (commandFiles.cooldown) {
                    if (delay.has(`${commandFiles.name}-${message.author.id}`)) return message.reply(`You can use this command again after **${ms(delay.get(`${commandFiles.name}-${message.author.id}`) - Date.now(), { long: true }).includes('ms') ? '0 second' : ms(delay.get(`${commandFiles.name}-${message.author.id}`) - Date.now(), { long: true })}**`);
                    commandFiles.execute(client, message, args);
                    delay.set(`${commandFiles.name}-${message.author.id}`, Date.now() + commandFiles.cooldown);
                    setTimeout(() => {
                        delay.delete(`${commandFiles.name}-${message.author.id}`);
                    }, commandFiles.cooldown);
                } else {
                    commandFiles.execute(client, message, args);
                }
            }
        } catch (error) {
            console.error(error);
            message.reply('there was an error trying to execute that command!');
        }
    }
}