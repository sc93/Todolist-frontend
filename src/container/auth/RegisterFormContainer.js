import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RegisterForm from "../../components/Auth/RegisterForm";
import { changeFiled, initializeForm } from "../../module/auth";

const RegisterFormContainer = () => {
    const dispatch = useDispatch();
    const { form } = useSelector(({ auth }) => ({ form: auth.register }));
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
    useEffect(() => {
        dispatch(initializeForm("register"));
    }, [dispatch]);
    return <RegisterForm form={form} onChange={onChange} />;
};

export default RegisterFormContainer;
