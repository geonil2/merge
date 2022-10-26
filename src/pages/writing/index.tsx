import React, {useCallback, useRef, useState} from 'react';
import dynamic from "next/dynamic";
import {Menu, MENUS} from "../../config/menus";
import styled from "@emotion/styled";
import {COLORS, SHADOWS} from "../../config/styles";
import {SubmitHandler, useForm} from "react-hook-form";
import {EditorType} from "@toast-ui/editor/types/editor";
import CommonButton from "../../components/commonButton";
import {useMutation} from "@tanstack/react-query";
import {postBoardApi} from "../../services/board/api";
import {postBoardRequestBody} from "../../services/board/types";
import useUser from "../../hooks/useUser";
import {useRouter} from "next/router";

const TextEditor = dynamic(() => import('../../components/textEditor'), {
  ssr: false,
})

type WritingInputValue = {
  title?: string
}

const defaultCategoryMenu = {
  id: 0,
  name: 'Category',
  title: 'Category',
  url: '/'
}

const descriptionPlaceholder = '내용을 입력해주세요.'

const Index = () => {
  const [showCategory, setShowCategory] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Menu>(defaultCategoryMenu);
  const [description, setDescription] = useState(`<p>${descriptionPlaceholder}</p>`);
  const { register, handleSubmit } = useForm();
  const editor = useRef(null);
  const { mutate } = useMutation(postBoardApi);
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
    mutate({
      ...data,
      category: selectedCategory.name,
      description,
      email: user?.email
    } as postBoardRequestBody, {
      onSuccess: (data) => {
        router.push(`${selectedCategory.url}`)
      }
    })
  }

  return (
    <Layout>
      <Container>
        <p>Write Article</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Category
            onClick={() => setShowCategory(!showCategory)}
            category={selectedCategory.title}
          >
            <SelectedLi>{selectedCategory.title}</SelectedLi>
            <ArrowImg src={showCategory ? '/images/icons/up_arrow.svg' : '/images/icons/down_arrow.svg'}></ArrowImg>
            {showCategory ? (
                <ul>
                  {MENUS.map(list => (
                    <li
                      key={list.id}
                      onClick={() => setSelectedCategory(list)}
                    >{list.title}</li>
                  ))}
                </ul>
              ) : null}
          </Category>
          <Title {...register("title")} placeholder={descriptionPlaceholder} />
          <TextEditorWrap>
            <TextEditor onChangeEditValue={onChangeEditValue} editor={editor} />
          </TextEditorWrap>
          <ButtonWrap>
              <Button title="작성" />
          </ButtonWrap>
        </form>
      </Container>
    </Layout>
  );
};

const Layout = styled.div`
  width: 1280px;
  padding: 20px 40px;
  margin: 0px auto;
`

const Container = styled.section`
  box-shadow: ${SHADOWS.basic};
  padding: 0px 24px;
  > p {
    font-weight: 700;
    line-height: 60px;
  }
`

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

export default Index;
