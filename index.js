const { Client, Intents, Collection } = require('discord.js');
const { TOKEN } = require('./JSON/config.json');

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS
    ]
});

client.commands = new Collection();
client.events = new Collection();

['commands', 'events'].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.login(TOKEN);