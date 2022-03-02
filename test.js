const { COOLDOWN } = require('../../JSON/config.json');

module.exports = {
    name: 'test',
    aliases: ['t'], // يمديك تستخدم اكثر من اسم للأمر كمثال $test | $t | لو ما تبي تستخدم اكثر من واحد خلها كذا: aliases: []
    cooldown: COOLDOWN,
    execute(client, message, args) {

        // احذف السطر هذا و حط الكود حقك

    }
}