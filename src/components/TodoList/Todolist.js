import React from "react";
import styled from "styled-components";
import palette from "../../lib/style/palette";
import Todo from "./Todo";

const TodolistBlock = styled.div``;
const DateDisplay = styled.div`
    font-size: 2rem;
    font-weight: 500;
    color: ${palette.purple[11]};
    margin-left: 1rem;
`;
const CardList = styled.div`
    display: flex;
    justify-content: flex-start;
    overflow-x: hidden;
`;

const Todolist = ({ date, todolist }) => {
    return (
        <TodolistBlock>
            <DateDisplay>{date}</DateDisplay>
            <CardList>
                {todolist.map((todo) => (
                    <Todo key={todo.todo_id} todo={todo} />
                ))}
            </CardList>
        </TodolistBlock>
    );
};

export default Todolist;
