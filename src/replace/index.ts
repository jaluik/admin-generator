import * as vscode from 'vscode';
import * as recast from 'recast';

export const command = 'admin-replace';
export const commandHandler = (
  editor: vscode.TextEditor,
  edit: vscode.TextEditorEdit,
  position: vscode.Position
) => {
  const list: any[] = [];
  const text = editor.document.getText();
  const ast = recast.parse(`const a =${text}`);
  recast.visit(ast, {
    visitLine({ node }: { node: any }) {
      list.push([
        {
          comment: node.comments?.map((i: any) => i.value).join(','),
          key: node.key.name,
          value: node.value.value,
        },
      ]);
      return true;
    },
  });

  return Promise.resolve([]);
};
