import React, {useCallback, useEffect, useRef, useState} from 'react';
import {useRouter} from "next/router";
import dynamic from "next/dynamic";
import styled from "@emotion/styled";
import {COLORS} from "../../config/styles";
import {basicPopupContentsAtom, toastPopupContentsAtom, visibleModalAtom} from "../../recoil/modal";
import {MutateOptions, useMutation} from "@tanstack/react-query";
import {SubmitHandler, useForm} from "react-hook-form";
import {EditorType} from "@toast-ui/editor/types/editor";
import {Editor} from "@toast-ui/react-editor";
import {postBoardApi, updateBoardByIdApi} from "../../services/board/api";
import {PostBoardRequestBody, PutBoardRequestBody} from "../../services/board/types";
import {Menu, menuList, popupModalContents} from "../../resources/types";
import {useSetRecoilState} from "recoil";
import CommonButton from "../commonButton";

const TextEditor = dynamic(() => import('../../components/textEditor'), {
  ssr: false,
});

type WritingInputValue = {
  title?: string
  category?: string,
  description?: string,
}

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

const defaultCategoryMenu = {
  id: 0,
  name: 'Category',
  title: 'Category',
  url: '/',
  disabled: false
}

const BoardForm: React.FC<Prop> = ({ type, board }) => {
  const [showCategory, setShowCategory] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Menu>(defaultCategoryMenu);
  const {
    register,
    handleSubmit,
    setValue,
  } = useForm();
  const editor = useRef<Editor>(null);
  const createBoard = useMutation(postBoardApi)
  const updateBoard = useMutation(updateBoardByIdApi);
  const router = useRouter();
  const setToastPopupContents = useSetRecoilState(toastPopupContentsAtom);
  const setBasicPopupContents = useSetRecoilState(basicPopupContentsAtom);
  const setVisibleModal = useSetRecoilState(visibleModalAtom);
  const mutateOption: MutateOptions<any, unknown, PutBoardRequestBody | PostBoardRequestBody, unknown> | undefined = {
    onSuccess: (data) => {
      router.push(`${selectedCategory.url}/${data._id}`)
    },
    onError: (data) => {
      setVisibleModal(true)
      setBasicPopupContents({...popupModalContents.commonError})
    }
  }

  const onChangeEditValue = useCallback((htmlVal: EditorType) => {
    if (!editor.current) return
    setValue('description', editor.current.getInstance().getHTML())
  }, [])

  const onSubmit: SubmitHandler<WritingInputValue> = (data, event) => {
    event?.preventDefault();
    if (!data.category || data.category == 'Category') {
      setVisibleModal(true)
      setToastPopupContents('카테고리를 선택해주세요.')
      return;
    }
    if (!data.title) {
      setVisibleModal(true)
      setToastPopupContents('제목을 입력해주세요.')
      return;
    }
    if (!data.description) {
      setVisibleModal(true)
      setToastPopupContents('내용을 입력해주세요.')
      return;
    }

    if (type === 'create') {
      createBoard.mutate({ ...data } as PostBoardRequestBody, mutateOption)
    } else {
      updateBoard.mutate({
        boardId: board?.id,
        ...data,
      } as PutBoardRequestBody, mutateOption)
    }
  }

  useEffect(() => {
    setValue('category', selectedCategory.name)
  }, [selectedCategory])

  useEffect(() => {
    if (board?.category) {
      const category = menuList.find(menu => (menu.name === board.category));
      category ? setSelectedCategory(category) : null
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
              !list.disabled ?
              <li
                key={list.id}
                onClick={() => setSelectedCategory(list)}
              >{list.title}</li> : null
            ))}
          </ul>
        ) : null}
      </Category>
      <Title
        {...register("title")}
        defaultValue={board?.title}
        placeholder='제목을 입력해주세요.'
      />
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
