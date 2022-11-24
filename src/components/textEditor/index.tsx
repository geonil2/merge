import React  from "react";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import {EditorType} from "@toast-ui/editor/types/editor";
import {useMutation} from "@tanstack/react-query";
import {postBoardImageApi} from "../../services/board/api";

interface Props {
  editor: React.RefObject<Editor>,
  defaultValue?: string
  onChangeEditValue: (htmlVal: EditorType) => void
}

const TextEditor: React.FC<Props> = ({editor, defaultValue, onChangeEditValue}) => {
  const { mutate } = useMutation(postBoardImageApi);

  return (
    <Editor
      ref={editor}
      height="485px"
      initialEditType="wysiwyg"
      initialValue={defaultValue ? defaultValue : undefined}
      placeholder="내용을 입력해주세요."
      onChange={onChangeEditValue}
      plugins={[colorSyntax]}
      toolbarItems={[
        ["heading", "bold", "italic", "strike"],
        ["hr", "quote"],
        ["ul", "ol", "task", "indent", "outdent"],
        ["table", "image", "link"],
      ]}
      hooks={{
        addImageBlobHook: async (blob, callback) => {
          const formData = new FormData();
          formData.append("boardImage", blob);
          mutate(formData, {
            onSuccess: (data) => {
              callback(data)
            }
          })
        }
      }}
    />
  );
};

export default TextEditor;
