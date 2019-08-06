const Command = require("../handlers/command.js");

module.exports = class extends Command {
    constructor(client, filePath) {
        super(client, filePath, {
            name: "commands",
            aliases: ["cmds"]
        });
    }

    execute(message) {
        const prefix = this.client.config.prefix;
        message.reply('شوف خاصك :wink:');
        message.author.send(`\`\`\`md\nCommands for ${this.client.user.username}\n---------------------------\n`
        +`> ${prefix}create\n" + "لتشغيل قيف اواي\n`
        +`> ${prefix}delete\n" + "حذف القيف اواي السابق\n`
        +`> ${prefix}draw\n" + "فرض التعادل \n`
        +`> ${prefix}redraw\n" + "اعادة اختيار فائز\n` 
        +`> ${prefix}invite\n" + "دعوة البوت الى سيرفرك\n`
        +`> ${prefix}server\n" + "سيرفر البوت الاصلي\n`
        +`> ${prefix}ping\n" + "سرعة اتصال البوت\`\`\``);
    }
};
