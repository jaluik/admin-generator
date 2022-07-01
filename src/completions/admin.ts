import * as vscode from 'vscode';

export default class AdminCompletionItemProvider
  implements vscode.CompletionItemProvider
{
  position?: vscode.Position;

  public provideCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position
  ) {
    console.log('document', document);
    const completion = new vscode.CompletionItem(
      'kq',
      vscode.CompletionItemKind.Snippet
    );
    return [completion];
  }

  public resolveCompletionItem(item: vscode.CompletionItem) {
    return item;
  }
}
