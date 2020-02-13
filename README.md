# tf-vscode-demo

A demo plugin for Terraform VSCode integration.

Based on Microsoft's [example code](https://github.com/Microsoft/vscode-extension-samples/tree/master/lsp-sample)

The syntax highlighting is adapted from https://github.com/alexlouden/Terraform.tmLanguage

## Try out the plugin

- Git clone the project to download it
- Run npm install from the main folder
- Open VS Code on this folder
- Press Ctrl+Shift+B to compile the client and server
- Switch to the Debug viewlet
- Select Launch Client from the drop down
- Run the launch config
- To try out language server features, select `Attach to Server`
- In the [Extension Development Host] instance of VSCode, open a Terraform or HCL file
- Examine syntax highlighting details by using `Developer: Inspect TM Scopes` from the Command Palette
- The server provides autocomplete for the words `resource`, `variable`, `data`, and `module` with hover details
