import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "../../components/Auth/LoginForm";
import { changeFiled, initializeForm } from "../../module/auth";
const LoginFormContainer = () => {
    const dispatch = useDispatch();
    const { form } = useSelector(({ auth }) => ({
        form: auth.login,
    }));
    const onChange = (e) => {
        const { name, value } = e.target;
        dispatch(
            changeFiled({
                form: "login",
                key: name,
                value: value,
            }),
        );
    };

    useEffect(() => {
        dispatch(initializeForm("login"));
    }, [dispatch]);
    return <LoginForm form={form} onChange={onChange} />;
};

export default LoginFormContainer;
