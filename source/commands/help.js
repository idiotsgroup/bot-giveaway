const Command = require("../handlers/command.js");

module.exports = class extends Command {
    constructor(client, filePath) {
        super(client, filePath, {
            name: "help",
        });
    }

    execute(message) {
        //message.author.send("```mg!create <time-in-seconds> <giveaway-title>\nmg!delete <giveaway-id>```");
        message.channel.send("** لروئية الاوامر : !commands  **");
message.channel.send("** لدعوة البوت الى سيرفرك: !invite  **");

    }
};
