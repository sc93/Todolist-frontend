import React from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Editor from "../../components/write/Editor";
import { changeField, initialize } from "../../modules/write";

const EditorContainer = () => {
    const { title, body, todo_date } = useSelector(({ write }) => ({
        title: write.title,
        body: write.body,
        todo_date: write.date,
    }));

    const dispatch = useDispatch();
    const onChangeField = useCallback(
        (payload) => {
            dispatch(changeField(payload));
        },
        [dispatch],
    );
    useEffect(() => {
        return () => {
            dispatch(initialize());
        };
    }, [dispatch]);
    return (
        <>
            <Editor
                onChangeField={onChangeField}
                title={title}
                body={body}
                date={todo_date}
            />
        </>
    );
};

export default EditorContainer;
