import React, {useCallback, useEffect, useRef, useState} from 'react';
// import {Menu, MENU} from "../../resources/menu";
import styled from "@emotion/styled";
import {COLORS} from "../../config/styles";
import CommonButton from "../commonButton";
import {SubmitHandler, useForm} from "react-hook-form";
import {EditorType} from "@toast-ui/editor/types/editor";
import {Editor} from "@toast-ui/react-editor";
import {useMutation} from "@tanstack/react-query";
import {postBoardApi, updateBoardByIdApi} from "../../services/board/api";
import useUser from "../../hooks/useUser";
import {useRouter} from "next/router";
import {BoardList, PostBoardRequestBody, PutBoardRequestBody} from "../../services/board/types";
import dynamic from "next/dynamic";
import {Menu, menuList} from "../../resources/types";

const TextEditor = dynamic(() => import('../../components/textEditor'), {
  ssr: false,
});

type WritingInputValue = {
  title?: string
}

const descriptionPlaceholder = '내용을 입력해주세요.'

interface Prop {
  type: 'create' | 'update',
  board?: UpdateBoardInfo
}

export type UpdateBoardInfo = {
  id: string,
  category: string,
  title: string,
  description: string
}

const BoardForm: React.FC<Prop> = ({ type, board }) => {
  const [showCategory, setShowCategory] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Menu>(menuList[0]);
  const [description, setDescription] = useState(`<p>${descriptionPlaceholder}</p>`);
  const { register, handleSubmit } = useForm();
  const editor = useRef<Editor>(null);
  const postBoard = useMutation(postBoardApi)
  const updateBoard = useMutation(updateBoardByIdApi);
  const { user } = useUser();
  const router = useRouter();

  const onChangeEditValue = useCallback((htmlVal: EditorType) => {
    if (!editor.current) return
    setDescription(editor.current.getInstance().getHTML());
  }, [])

  const onSubmit: SubmitHandler<WritingInputValue> = (data, event) => {
    event?.preventDefault()
    console.log({ category: selectedCategory, description, ...data, })
    console.log(user, 'user')
    if (type === 'create') {
      postBoard.mutate({
        ...data,
        category: selectedCategory.name,
        description,
        email: user?.email
      } as PostBoardRequestBody, {
        onSuccess: (data) => {
          router.push(`${selectedCategory.url}`)
        }
      })
    } else {
      updateBoard.mutate({
        boardId: board?.id,
        ...data,
        category: selectedCategory.name,
        description,
        email: user?.email
      } as PutBoardRequestBody, {
        onSuccess: (data) => {
          router.push(`${selectedCategory.url}`)
        }
      })
    }

  }

  useEffect(() => {
    if (board?.category) {
      const category = menuList.find(menu => (menu.name === board.category)) as Menu;
      setSelectedCategory(category)
    }

  }, [board])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Category
        onClick={() => setShowCategory(!showCategory)}
        category={selectedCategory.title}
      >
        <SelectedLi>{selectedCategory.title}</SelectedLi>
        <ArrowImg src={showCategory ? '/images/icons/up_arrow.svg' : '/images/icons/down_arrow.svg'}></ArrowImg>
        {showCategory ? (
          <ul>
            {menuList.map(list => (
              <li
                key={list.id}
                onClick={() => setSelectedCategory(list)}
              >{list.title}</li>
            ))}
          </ul>
        ) : null}
      </Category>
      <Title {...register("title")} defaultValue={board?.title} placeholder={descriptionPlaceholder} />
      <TextEditorWrap>
        <TextEditor onChangeEditValue={onChangeEditValue} defaultValue={board?.description} editor={editor} />
      </TextEditorWrap>
      <ButtonWrap>
        <Button title={type === 'create' ? '작성' : '수정'} />
      </ButtonWrap>
    </form>
  );
};

const Category = styled.div`
  position: relative;
  width: 207px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: ${(props: { category: string }) => (props.category === 'Category' ? COLORS.GRAY : COLORS.BLACK )};
  border: 1px solid ${COLORS.GRAY};
  border-radius: 4px;
  padding: 13px 14px;
  cursor: pointer;
  > ul {
    position: absolute;
    z-index: 9999;
    top: 100%;
    left: 0%;
    width: 100%;
    border: 1px solid ${COLORS.GRAY};
    background-color: ${COLORS.WHITE};
    > li {
      width: 100%;
      line-height: 20px;
      padding: 13px 14px;
      :hover {
        color: ${COLORS.BLACK}; 
      }
    }
  }
`

const SelectedLi = styled.p`
`

const ArrowImg = styled.img`
  width: 14px;
  height: 14px;
`

const Title = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid ${COLORS.GRAY};
  border-radius: 4px;
  padding: 13px 14px;
  margin-top: 14px;
  &::placeholder {
    color: ${COLORS.GRAY};
  }
`

const TextEditorWrap = styled.div`
  margin-top: 14px;
`

const ButtonWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 22px;
  margin-top: 40px;
`

const Button = styled(CommonButton)`
  width: 180px;
`

export default BoardForm;
