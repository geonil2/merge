import React, { useRef } from "react";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import {EditorType} from "@toast-ui/editor/types/editor";

interface Props {
  editor: React.MutableRefObject<null>,
  onChangeEditValue: (htmlVal: EditorType) => void
}

const TextEditor: React.FC<Props> = ({editor, onChangeEditValue}) => {
  return (
    <Editor
      ref={editor}
      height="485px"
      initialEditType="wysiwyg"
      initialValue="내용을 입력해주세요."
      // placeholder="내용을 입력해주세요."
      onChange={onChangeEditValue}
      plugins={[colorSyntax]}
      toolbarItems={[
        ["heading", "bold", "italic", "strike"],
        ["hr", "quote"],
        ["ul", "ol", "task", "indent", "outdent"],
        ["table", "image", "link"],
      ]}
    />
  );
};

export default TextEditor;
