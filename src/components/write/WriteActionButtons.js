import React from "react";
import styled from "styled-components";
import Button from "../Common/Button";

const WriteActionButtonsBlock = styled.div`
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

const WriteActionButtons = ({ onCancel, onPublish, isEdit }) => {
    return (
        <WriteActionButtonsBlock>
            <StyledButton onClick={onCancel}>취소</StyledButton>
            <StyledButton onClick={onPublish}>
                {isEdit ? "수정" : "등록"}
            </StyledButton>
        </WriteActionButtonsBlock>
    );
};

export default WriteActionButtons;
