import React from "react";
import AuthTemplate from "../components/Auth/AuthTemplate";
// import LoginForm from "../components/Auth/LoginForm";
import LoginFormContainer from "../container/auth/LoginFormContainer";
const LoginPage = () => {
    return (
        <div>
            <AuthTemplate>
                <LoginFormContainer />
            </AuthTemplate>
        </div>
    );
};

export default LoginPage;
