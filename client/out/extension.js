"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const vscode_1 = require("vscode");
const vscode_languageclient_1 = require("vscode-languageclient");
let client;
function activate(context) {
    let serverOptions;
    let setup = vscode_1.window.createOutputChannel("Extension Setup");
    let config = vscode_1.workspace.getConfiguration("languageServerExample");
    let isExternal = config.get("external");
    if (isExternal) {
        setup.appendLine("Launching external language server...");
        let cmd = config.get("pathToBinary") || '';
        let executable = {
            command: cmd,
            args: config.get("args"),
            options: {}
        };
        serverOptions = {
            run: executable,
            debug: executable
        };
    }
    else {
        setup.appendLine("Using internal language server...");
        // The server is implemented in node
        let serverModule = context.asAbsolutePath(path.join('server', 'out', 'server.js'));
        // The debug options for the server
        // --inspect=6009: runs the server in Node's Inspector mode so VS Code can attach to the server for debugging
        let debugOptions = { execArgv: ['--nolazy', '--inspect=6009'] };
        serverOptions = {
            run: { module: serverModule, transport: vscode_languageclient_1.TransportKind.ipc },
            debug: {
                module: serverModule,
                transport: vscode_languageclient_1.TransportKind.ipc,
                options: debugOptions
            }
        };
    }
    // Options to control the language client
    let clientOptions = {
        documentSelector: [{ scheme: 'file', language: 'terraform' }],
        synchronize: {
            fileEvents: vscode_1.workspace.createFileSystemWatcher('**/*.tf')
        },
    };
    // Create the language client and start the client.
    client = new vscode_languageclient_1.LanguageClient('languageServerExample', 'Language Server Example', serverOptions, clientOptions);
    // Start the client. This will also launch the server
    client.start();
}
exports.activate = activate;
function deactivate() {
    if (!client) {
        return undefined;
    }
    return client.stop();
}
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map