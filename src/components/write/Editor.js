import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Quill from "quill";
import "quill/dist/quill.bubble.css";
import palette from "../../lib/style/palette";
const EditorBlock = styled.div`
    padding: 2rem 1rem;
    color: black;
    width: 1024px;
    margin: 0px auto;
`;

const TitleInput = styled.input`
    font-size: 3rem;
    outline: none;
    padding-bottom: 0.5rem;
    border: none;
    border-bottom: 1px solid ${palette.gray[4]};
    margin-bottom: 2rem;
    width: 100%;
`;
const QuillWrapper = styled.div`
    .ql-editor : {
        padding: 0;
        min-height: 320px;
        font-size: 1.125rem;
        line-height: 1.5;
    }
    .ql-editor.ql-blank::bofore {
        left: 0px;
    }
`;
const Editor = ({ onChangeField, title, body, date }) => {
    const quillElement = useRef(null);
    const quillInstance = useRef(null);
    useEffect(() => {
        quillInstance.current = new Quill(quillElement.current, {
            theme: "bubble",
            placeholder: "내용을 작성하세요...",
            modules: {
                toolbar: [
                    [{ header: 1 }, { header: 2 }],
                    ["bold", "italic", "underline", "strike"],
                    [{ list: "ordered" }, { list: "bullet" }],
                    ["blockquoto", "code-block", "link", "image"],
                ],
            },
        });
        const quill = quillInstance.current;
        quill.on("text-change", (delta, oldDelta, source) => {
            if (source === "user") {
                onChangeField({ key: "body", value: quill.root.innerHTML });
            }
        });
    }, [onChangeField]);

    const onChangeTitle = (e) => {
        onChangeField({ key: "title", value: e.target.value });
    };
    return (
        <EditorBlock>
            <TitleInput
                placeholder="제목을 입력하세요."
                onChange={onChangeTitle}
            ></TitleInput>
            <QuillWrapper>
                <div ref={quillElement}></div>
            </QuillWrapper>
        </EditorBlock>
    );
};

export default Editor;
