import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import palette from "../../lib/style/palette";
import Button from "../Common/Button";

const MainBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Infomation = styled.div`
    width: 100%;
    h1 {
        font-size: 3rem;
        font-weight: 500;
        text-align: center;
        color: ${palette.gray[8]};
    }
`;
const ButtonArea = styled.div`
    font-size: 2rem;
`;
const Main = () => {
    return (
        <MainBlock>
            <Infomation>
                <h1>TodoList를 작성하세요.</h1>
            </Infomation>
            <ButtonArea>
                <Link to="/login">로그인</Link> /
                <Link to="/register"> 회원가입</Link>
            </ButtonArea>
        </MainBlock>
    );
};

export default Main;
