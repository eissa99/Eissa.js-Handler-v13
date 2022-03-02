const { COOLDOWN } = require('../../JSON/config.json');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'server',
    cooldown: COOLDOWN,
    aliases: [],
    execute(client, message, args) {

        let Embed = new MessageEmbed()
            .setColor('RED')
            .setAuthor({ name: message.guild.name, iconURL: message.guild.iconURL({ dynamic: true }) })
            .setDescription(`Owner: <@${message.guild.ownerId}> | ${message.guild.ownerId}\nMembers: ${message.guild.memberCount}\nCreated at: ${message.guild.createdAt.toLocaleString()}`)
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setImage(message.guild.iconURL({ dynamic: true }))

        message.reply({ embeds: [Embed] });

    }
}