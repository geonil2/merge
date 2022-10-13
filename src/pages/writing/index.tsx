import React, {useCallback, useRef, useState} from 'react';
import dynamic from "next/dynamic";
import {MENUS} from "../../config/menus";
import styled from "@emotion/styled";
import {COLORS, SHADOWS} from "../../config/styles";
import {useForm} from "react-hook-form";
import {EditorType} from "@toast-ui/editor/types/editor";

const TextEditor = dynamic(() => import('../../components/textEditor'), {
  ssr: false,
})

const Index = () => {
  const [showCategory, setShowCategory] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Category');
  const { register, handleSubmit } = useForm();
  const [htmlValue, setHtml] = useState('')
  const editor = useRef(null);

  const onChangeEditValue = useCallback((htmlVal: EditorType) => {
    // console.log(htmlVal, 'htmlVal')
    if (!editor.current) return
    console.log(editor.current.getInstance().getHTML(), 'bb')
    setHtml(() => htmlVal)

  }, [])

  return (
    <Layout>
      <Container>
        <p>Write Article</p>
        <form onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}>
          <Category
            onClick={() => setShowCategory(!showCategory)}
            category={selectedCategory}
          >
            <SelectedLi>{selectedCategory}</SelectedLi>
            <ArrowImg src={showCategory ? '/images/icons/up_arrow.svg' : '/images/icons/down_arrow.svg'}></ArrowImg>
            {showCategory ? (
                <ul>
                  {MENUS.map(list => (
                    <li
                      key={list.id}
                      onClick={() => setSelectedCategory(list.name)}
                    >{list.name}</li>
                  ))}
                </ul>
              ) : null}
          </Category>
          <Title {...register("firstName")} placeholder='Enter a title' />
          <TextEditor onChangeEditValue={onChangeEditValue} editor={editor} />
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
  margin-top: 14px;
`

export default Index;
