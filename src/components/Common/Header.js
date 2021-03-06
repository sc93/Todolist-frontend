import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "./Button";

const HeaderBlock = styled.div`
    position: fixed;
    width: 100%;
    background: white;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
    z-index: 99;
`;
const Wrapper = styled.div`
    height: 4rem;
    margin: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
        font-size: 1.125rem;
        font-weight: 800;
        letter-spacing: 2px;
    }
    .right {
        display: flex;
        align-items: center;
    }
`;
const Space = styled.div`
    height: 4rem;
`;
const Header = ({ user, logout }) => {
    return (
        <>
            <HeaderBlock>
                <Wrapper>
                    <Link to="/" className="logo">
                        TodoList
                    </Link>
                    <div className="right">
                        {user ? (
                            <Button
                                onClick={() => {
                                    logout();
                                }}
                            >
                                로그아웃
                            </Button>
                        ) : (
                            <Button to="/login">로그인</Button>
                        )}
                    </div>
                </Wrapper>
            </HeaderBlock>
            <Space />
        </>
    );
};

export default Header;
