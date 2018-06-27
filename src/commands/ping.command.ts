import { Client, Message } from "discord.js";

export class PingCommand {
    constructor(private client: Client, private message: Message) { }

    run() {
        this.message.reply(`**Pong! **${Math.floor(this.client.ping)}`);
    }
}