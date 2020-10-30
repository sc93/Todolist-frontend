import React from "react";
import styled from "styled-components";
import Button from "../Common/Button";

const TodoActionButtonsBlock = styled.div`
    margin-top: 1rem;
    button + button {
        margin-left: 1rem;
    }
    text-align: center;
`;
const StyledButton = styled(Button)`
    height: 5rem;
    width: 10rem;
    border-radius: 5px;
    font-size: 1.5rem;
`;
const TodoActionButtons = ({ onEdit, onRemove, onGoBack }) => {
    return (
        <TodoActionButtonsBlock>
            <StyledButton onClick={onRemove}>삭제</StyledButton>
            <StyledButton onClick={onEdit}>수정</StyledButton>
            <StyledButton onClick={onGoBack}>목록</StyledButton>
        </TodoActionButtonsBlock>
    );
};

export default TodoActionButtons;
