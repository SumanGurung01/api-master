import { basicSetup } from "codemirror";
import { EditorView, keymap } from "@codemirror/view";
import { indentWithTab } from "@codemirror/commands";
import { json } from "@codemirror/lang-json";
import { EditorState } from "@codemirror/state";

const basicExtensions = [
  basicSetup,
  keymap.of([indentWithTab]),
  json(),
  EditorState.tabSize.of(2),
];

export function setupEditor(responseRef) {
  const responseEditor = new EditorView({
    state: EditorState.create({
      doc: "",
      extensions: [...basicExtensions, EditorView.editable.of(false)],
    }),
    parent: responseRef.current,
  });

  function updateResponse(value) {
    responseEditor.dispatch({
      changes: {
        from: 0,
        to: responseEditor.state.doc.length,
        insert: JSON.stringify(value, null, 4),
      },
    });
  }

  return { updateResponse };
}
