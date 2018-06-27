import { DtModule, Module, ModuleOptions } from 'dangul-core';

import * as fs from 'fs';
import * as pt from 'path';
import { Message } from 'discord.js';

import { PingCommand } from './commands/ping.command';
import { ReplyCommand } from './commands/reply.command';

@DtModule({
    commands: [
        { name: 'ping', class: PingCommand },
        { name: 'reply', class: ReplyCommand }
    ],
    config: JSON.parse(fs.readFileSync(pt.join(__dirname, '/bot.config.json')).toString())
})
export class BotModule extends Module {
    constructor(mOptions: ModuleOptions) {
        super(mOptions);
    }

    onInit() {
        this.onReady(() => {
            console.log("Ready!");
        });

        this.onMessage((Message: Message) => {
            this.CommandManager.HandleComamnds(Message);
        });
    }
}