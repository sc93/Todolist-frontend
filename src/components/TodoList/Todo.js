import React from "react";
import styled from "styled-components";
import palette from "../../lib/style/palette";

const TodoBlock = styled.div`
    height: 300px;
    width: 350px;
    margin: 1rem;
    border: 1px solid ${palette.gray[8]};
    display: inline-table;
`;

const Todo = ({ todo }) => {
    const { title, body } = todo;
    return (
        <TodoBlock>
            {title}
            {body}
        </TodoBlock>
    );
};

export default Todo;
