import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import WriteActionButtons from "../../components/write/WriteActionButtons";
import { todoWrite } from "../../modules/write";

const WriteActionButtonsContainer = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { title, body, date, msg, error } = useSelector(({ write }) => ({
        title: write.title,
        body: write.body,
        date: write.date,
        msg: write.msg,
        error: write.error,
    }));
    const onPublish = () => {
        dispatch(todoWrite({ title, body, todo_date: date }));
    };
    const onCancel = () => {
        history.goBack();
    };
    useEffect(() => {
        if (msg) history.push("/");
        if (error) console.log("error! 글쓰기실패");
    }, [history, msg, error]);
    return <WriteActionButtons onCancel={onCancel} onPublish={onPublish} />;
};

export default WriteActionButtonsContainer;
