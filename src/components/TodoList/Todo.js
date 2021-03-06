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
const ThumbnailWrapper = styled.div`
    height: 200px;
    width: 100%;
    text-align: center;
`;
const ThumbnailImg = styled.img`
    height: 100%;
`;
const CardHr = styled.hr`
    margin: 4px;
`;
const Title = styled.div`
    width: 350px;
    height: 90px;
    text-align: center;
`;
const Todo = ({ todo, onClick }) => {
    const { todo_id, title, thumbnail } = todo;
    return (
        <TodoBlock onClick={() => onClick(todo_id)}>
            <ThumbnailWrapper>
                <ThumbnailImg
                    src={`http://localhost:3000/thumbnail/${thumbnail}`}
                />
            </ThumbnailWrapper>
            <CardHr />
            <Title>{title}</Title>
        </TodoBlock>
    );
};

export default Todo;
