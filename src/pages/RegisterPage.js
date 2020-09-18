import React from "react";
import AuthTemplate from "../components/Auth/AuthTemplate";
import RegisterFormContainer from "../container/auth/RegisterFormContainer";

const RegisterPage = () => {
    return (
        <div>
            <AuthTemplate type="register">
                <RegisterFormContainer />
            </AuthTemplate>
        </div>
    );
};

export default RegisterPage;
