const Command = require("../handlers/command.js");

module.exports = class extends Command {
    constructor(client, filePath) {
        super(client, filePath, {
            name: "server",
            aliases: ["sev"]
        });
    }

    execute(message) {
        const prefix = this.client.config.prefix;
        message.reply('تم ارسال سيرفر المساعدة الى الخاص. :wink:');
        message.author.send('سيرفر المساعدة اذا احتجت');
    }
};