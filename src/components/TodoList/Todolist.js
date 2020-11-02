import React, { useRef } from "react";
import styled from "styled-components";
import palette from "../../lib/style/palette";
import Todo from "./Todo";
import { useHistory } from "react-router-dom";

const TodolistBlock = styled.div``;
const DateDisplay = styled.div`
    font-size: 2rem;
    font-weight: 500;
    color: ${palette.purple[11]};
    margin-left: 5rem;
`;
const CardListWrapper = styled.div`
    width: 1660px;
    height: 340px;
    position: relative;
    .leftArrow {
        float: left;
    }
    .rightArrow {
        float: right;
    }
`;
const CardList = styled.div`
    display: flex;
    float: left;
    justify-content: flex-start;
    overflow-x: hidden;
    width: 1520px;
    position: relative;
`;
const Arrow = styled.span`
    img {
        width: 64px;
        height: 64px;
        margin-top: 125px;
    }
`;
const Blank = styled.span`
    width: 64px;
    height: 64px;
`;

const Todolist = ({ date, todolist }) => {
    const history = useHistory();
    const listEl = useRef(null);
    const listCnt = todolist.length;
    let pageNum = 1;

    const onClick = (id) => {
        history.push("/todo/" + id);
    };
    const onMove = () => {
        listEl.current.scrollTo({
            top: 0,
            left: 1520 * (pageNum - 1),
            behavior: "smooth",
        });
    };

    return (
        <TodolistBlock>
            <DateDisplay>
                {date.substring(0, 4) + "년"} {date.substring(4, 6) + "월"}
            </DateDisplay>
            <CardListWrapper>
                {listCnt >= 4 ? (
                    <Arrow className="leftArrow">
                        <img
                            src={`${process.env.PUBLIC_URL}/icons/previous.png`}
                            onClick={() => {
                                pageNum = 1 === pageNum ? pageNum : pageNum - 1;
                                onMove();
                            }}
                        />
                    </Arrow>
                ) : (
                    <Blank className="leftArrow">　</Blank>
                )}
                <CardList ref={listEl}>
                    {todolist.map((todo) => (
                        <Todo
                            key={todo.todo_id}
                            todo={todo}
                            onClick={onClick}
                        />
                    ))}
                </CardList>
                {listCnt >= 4 ? (
                    <Arrow className="rightArrow">
                        <img
                            src={`${process.env.PUBLIC_URL}/icons/next.png`}
                            onClick={() => {
                                pageNum =
                                    Math.ceil(listCnt / 4) === pageNum
                                        ? pageNum
                                        : pageNum + 1;
                                onMove();
                            }}
                        />
                    </Arrow>
                ) : (
                    <Blank className="rightArrow">　</Blank>
                )}
            </CardListWrapper>
        </TodolistBlock>
    );
};

export default Todolist;
