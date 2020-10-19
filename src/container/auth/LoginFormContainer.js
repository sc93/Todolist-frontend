import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoginForm from "../../components/Auth/LoginForm";
import { changeFiled, initializeForm, login } from "../../modules/auth";
import { check } from "../../modules/user";
import { withRouter } from "react-router-dom";

const LoginFormContainer = ({ history }) => {
    const dispatch = useDispatch();
    const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
        form: auth.login,
        auth: auth.auth,
        authError: auth.errror,
        user: user.user,
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
    const onSubmit = (e) => {
        e.preventDefault();
        const { userid, userpw } = form;
        dispatch(login({ userid, userpw }));
        console.log(auth);
    };

    useEffect(() => {
        dispatch(initializeForm("login"));
    }, [dispatch]);

    useEffect(() => {
        if (authError) {
            console.log(authError);
        }
        if (auth) {
            dispatch(check());
        }
    }, [auth]);

    useEffect(() => {
        if (user) {
            history.push("/");
            try {
                localStorage.setItem("user", JSON.stringify(user));
            } catch (error) {
                console.log(error);
            }
        }
    }, [history, user]);
    return <LoginForm form={form} onChange={onChange} onSubmit={onSubmit} />;
};

export default withRouter(LoginFormContainer);
