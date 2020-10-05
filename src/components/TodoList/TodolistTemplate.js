import React from "react";
import styled from "styled-components";
import Todolist from "./Todolist";

const TodolistTemplateBlock = styled.div`
    width: 100%;
    height: 100%;
    margin: 1rem 4rem;
`;

const TodolistTemplate = ({ todolist }) => {
    return (
        <TodolistTemplateBlock>
            {todolist.map((list) => (
                <Todolist
                    key={list.date}
                    date={list.date}
                    todolist={list.list}
                />
            ))}
        </TodolistTemplateBlock>
    );
};

export default TodolistTemplate;
