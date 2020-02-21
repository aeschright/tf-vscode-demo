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
  - Internal Language Server
    - select `Attach to Server`
  - External Language Server
    - Press the :cog: to get into settings (or `Cmd,` on Mac)
    - Go to `Extensions` -> `Demo configuration`
    - Tick _Language Server Example: External_ box
    - (modify settings if your path or args differ from default ones)
    - Press the green restart button in the main window
- In the [Extension Development Host] instance of VSCode, open a Terraform or HCL file
- Examine syntax highlighting details by using `Developer: Inspect TM Scopes` from the Command Palette
- The client provides snippets for several blocks (`resource`, `module`, `data`, etc.)
- The servers include additional auto-complete items (try typing `aws` with the internal language server option)
