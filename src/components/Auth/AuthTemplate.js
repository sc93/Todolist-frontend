import React from "react";
import styled from "styled-components";
import palette from "../../lib/style/palette";

const AuthTemplateBlock = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: ${palette.gray[3]};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const WhiteBox = styled.div`
    width: 540px;
    height: 380px;
    background: ${palette.gray[6]};
    border-radius: 10px;
    h2 {
        margin: 1rem 3rem;
        color: white;
    }
`;
const WhiteBoxLong = styled(WhiteBox)`
    height: 600px;
    h2 {
        text-align: center;
    }
`;
const AuthTemplate = ({ children, type }) => {
    return (
        <AuthTemplateBlock>
            {type === "register" ? (
                <WhiteBoxLong>
                    <h2>계정만들기</h2>
                    {children}
                </WhiteBoxLong>
            ) : (
                <WhiteBox>
                    <h2>TodoList를 작성해보세요.</h2>
                    {children}
                </WhiteBox>
            )}
        </AuthTemplateBlock>
    );
};

export default AuthTemplate;
