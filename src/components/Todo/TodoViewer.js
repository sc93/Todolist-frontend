import React from "react";
import styled from "styled-components";

const TodoViewerBlock = styled.div`
    color: black;
    height: 700px;
    width: 100%;
`;
const todoTitle = styled.div``;
const todoInfo = styled.div``;
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
    return <TodoViewerBlock>{title}11</TodoViewerBlock>;
};

export default TodoViewer;
