import React, { useMemo } from "react";
import styled from "styled-components";
import pallete from "../../lib/style/palette";
const TodoViewerBlock = styled.div`
    padding: 2rem 1rem;
    color: black;
    width: 1024px;
    margin: 0px auto;
`;
const TodoHead = styled.div`
    border-bottom: 1px solid ${pallete.gray[4]};
    padding-bottom: 1rem;
    span.title {
        font-size: 2.5rem;
        font-weight: 600;
        margin: 2rem 1rem;
    }
    span.write_date {
        float: right;
        font-size: 1rem;
        margin: 1.5rem 1rem;
    }
`;
const TodoContentWrapper = styled.div`
    margin: 2rem 1rem;
    font-size: 1.5rem;
    font-weight: 500;
`;
const TodoContent = styled.div``;
const TodoViewer = ({ todo }) => {
    if (!todo.todo) return null;
    const {
        todo_id,
        title,
        body,
        todo_date,
        writer_date,
        writer_id,
    } = todo.todo;
    const getDateString = (d) => {
        const year = d.slice(0, 4);
        const month = d.slice(4, 6);
        const date = d.slice(6, 8);
        return `${year}년 ${month}월 ${date}일`;
    };
    return (
        <TodoViewerBlock>
            <TodoHead>
                <span className="title">{title}</span>
                <span className="write_date">
                    작성일 : {getDateString(writer_date)}
                </span>
            </TodoHead>
            <TodoContentWrapper>
                <p>{getDateString(todo_date)}의 Todo</p>
                <TodoContent
                    dangerouslySetInnerHTML={{
                        __html: body,
                    }}
                ></TodoContent>
            </TodoContentWrapper>
        </TodoViewerBlock>
    );
};

export default TodoViewer;
