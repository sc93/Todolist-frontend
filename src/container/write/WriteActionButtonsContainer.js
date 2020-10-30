import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import WriteActionButtons from "../../components/write/WriteActionButtons";
import { todoUpdate, todoWrite } from "../../modules/write";

const WriteActionButtonsContainer = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { title, body, date, msg, error, todo, originalTodoId } = useSelector(
        ({ write }) => ({
            title: write.title,
            body: write.body,
            date: write.date,
            msg: write.msg,
            error: write.error,
            todo: write.todo,
            originalTodoId: write.originalTodoId,
        }),
    );
    const onPublish = () => {
        if (originalTodoId) {
            dispatch(
                todoUpdate({
                    id: originalTodoId,
                    title,
                    body,
                    todo_date: date,
                }),
            );
            return;
        }

        dispatch(todoWrite({ title, body, todo_date: date }));
    };
    const onCancel = () => {
        history.goBack();
    };
    useEffect(() => {
        if (msg) history.push("/");
        if (error) console.log("error! 글쓰기실패");
    }, [history, msg, error]);
    return (
        <WriteActionButtons
            onCancel={onCancel}
            onPublish={onPublish}
            isEdit={!!originalTodoId}
        />
    );
};

export default WriteActionButtonsContainer;
