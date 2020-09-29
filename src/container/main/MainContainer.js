import React from "react";
import { useSelector } from "react-redux";
import Main from "../../components/Main/Main";
const MainContainer = () => {
    const { user } = useSelector(({ user }) => ({
        user: user.user,
    }));
    return user ? <div>로그인후</div> : <Main />;
};

export default MainContainer;
