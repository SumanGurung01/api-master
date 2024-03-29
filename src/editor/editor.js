import { basicSetup } from "codemirror";
import { EditorView, keymap } from "@codemirror/view";
import { indentWithTab } from "@codemirror/commands";
import { json } from "@codemirror/lang-json";
import { EditorState } from "@codemirror/state";

const basicExtensions = [
  basicSetup,
  keymap.of([indentWithTab]),
  json(),
  EditorState.tabSize.of(4),
];

export function setupEditorResponse(responseRef) {
  // response editor
  const responseEditor = new EditorView({
    state: EditorState.create({
      doc: "",
      extensions: [...basicExtensions, EditorView.editable.of(false)],
    }),
    parent: responseRef.current,
  });

  // function ti update response
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

export function setupEditorRequest(requestRef) {
  // request editor
  const requestEditor = new EditorView({
    state: EditorState.create({
      doc: "{}",
      extensions: [...basicExtensions],
    }),
    parent: requestRef.current,
  });

  // return editor current content (json)
  function returnRequestJson() {
    return requestEditor.state.doc;
  }

  return { returnRequestJson };
}
