import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import palette from "../../lib/style/palette";
import Button from "../Common/Button";

const LoginFormBlock = styled.div`
    margin: 0 3rem;
    div > p {
        color: ${palette.gray[2]};
        margin: 0.5rem 0;
        font-size: 1.125rem;
    }
`;
const StyledInput = styled.input`
    font-size: 1.25rem;
    width: 98%;
    height: 30px;
    border: none;
    border: 2px solid ${palette.gray[7]};
    padding-bottom: 0.5rem;
    outline: none;
    background: ${palette.gray[7]};
    color: ${palette.gray[2]};
    &:focus {
        color: $oc-real-7;
        border: 2px solid ${palette.purple[10]};
    }
    & + & {
        margin-top: 1rem;
    }
`;
const ButtonMarginTop = styled(Button)`
    width: 100%;
    height: 40px;
    font-size: 1.25rem;
    margin-top: 2rem;
`;
const LinkColor = styled(Link)`
    color: ${palette.purple[13]};
    text-decoration: underline;
`;
const LoginForm = ({ form, onChange, onSubmit }) => {
    return (
        <LoginFormBlock>
            <form onSubmit={onSubmit}>
                <div>
                    <p>아이디</p>
                    <StyledInput
                        name="userid"
                        value={form.userid}
                        onChange={onChange}
                    />
                    <p>비밀번호</p>
                    <StyledInput
                        name="userpw"
                        type="password"
                        value={form.userpw}
                        onChange={onChange}
                    />
                </div>
                <ButtonMarginTop>로그인</ButtonMarginTop>
            </form>
            <p>
                아직 계정이 없으신가요?{" "}
                <LinkColor to="/register">가입하기</LinkColor>
            </p>
        </LoginFormBlock>
    );
};

export default LoginForm;
