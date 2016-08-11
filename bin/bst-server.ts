/// <reference path="../typings/index.d.ts" />

// Startup script for running BST
import {BespokeServer} from "../lib/server/bespoke-server";
import * as program from "commander";
import {WebhookRequest} from "../lib/core/webhook-request";
import {Global} from "../lib/core/global";

program.version(Global.version());

program
    .command("start <webhookPort> <nodePort>")
    .description("Proxies an HTTP service running at the specified port")
    .action(function (nodeID: string, port: number, options: any) {
        let webhookPort: number = parseInt(process.argv[3]);
        let serverPort: number = parseInt(process.argv[4]);
        let bespokeServer = new BespokeServer(webhookPort, serverPort);
        bespokeServer.start();
    });

program.parse(process.argv);
