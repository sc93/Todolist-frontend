import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RegisterForm from "../../components/Auth/RegisterForm";
import { changeFiled, initializeForm, register } from "../../modules/auth";
import { check } from "../../modules/user";
import { withRouter } from "react-router-dom";

const RegisterFormContainer = ({ history }) => {
    const dispatch = useDispatch();
    const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
        form: auth.register,
        auth: auth.auth,
        authError: auth.authError,
        user: user.user,
    }));
    const onChange = (e) => {
        const { name, value } = e.target;
        dispatch(
            changeFiled({
                form: "register",
                key: name,
                value: value,
            }),
        );
    };
    const onSubmit = (e) => {
        e.preventDefault();
        const { userid, username, userpw } = form;
        dispatch(register({ userid, username, userpw }));
    };
    useEffect(() => {
        dispatch(initializeForm("register"));
    }, [dispatch]);
    useEffect(() => {
        if (auth) {
            history.push("/login");
            // dispatch(check());
            return;
        }
        if (authError) {
            console.log("auth : ", auth);
            return;
        }
    }, [dispatch, auth, authError]);
    return <RegisterForm form={form} onChange={onChange} onSubmit={onSubmit} />;
};

export default withRouter(RegisterFormContainer);
