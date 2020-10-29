import React from "react";
import styled from "styled-components";
import Todolist from "./Todolist";
import palette from "../../lib/style/palette";
import { useHistory } from "react-router-dom";

const TodolistTemplateBlock = styled.div`
    margin: 1rem 4rem;
`;
const WriteTodo = styled.button`
    position: fixed;
    width: 80px;
    height: 80px;
    bottom: 30px;
    right: 30px;
    background: ${palette.purple[11]};
    border: none;
    border-radius: 40px;
    color: white;
    font-size: 4rem;
    font-weight: 500;
`;
const TodolistTemplate = ({ todolist }) => {
    const history = useHistory();
    const onWriteTodo = () => {
        history.push("/write");
    };
    return (
        <TodolistTemplateBlock>
            {todolist.map((list) => (
                <Todolist
                    key={list.date}
                    date={list.date}
                    todolist={list.list}
                />
            ))}
            <WriteTodo onClick={onWriteTodo}>+</WriteTodo>
        </TodolistTemplateBlock>
    );
};

export default TodolistTemplate;
