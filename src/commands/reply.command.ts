import { Client, Message } from "discord.js";

export class ReplyCommand {
    constructor(private client: Client, private message: Message) { }

    run() {
        this.message.reply(`${Math.random() * 100}`);
    }
}