import * as vscode from 'vscode';
import AdminCompletionItemProvider from './completions/admin';
import { command, commandHandler } from './replace/index';

export function activate(context: vscode.ExtensionContext) {
  const options = vscode.languages.registerCompletionItemProvider(
    ['javascriptreact', 'typescriptreact'],
    new AdminCompletionItemProvider(),
    '.'
  );

  context.subscriptions.push(
    vscode.commands.registerTextEditorCommand(command, commandHandler)
  );

  context.subscriptions.push(options);
}

export function deactivate() {}
