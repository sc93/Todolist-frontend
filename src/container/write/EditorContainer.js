import React from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Editor from "../../components/write/Editor";
import { changeField, initialize } from "../../modules/write";

const EditorContainer = () => {
    const { title, body, date } = useSelector(({ write }) => ({
        title: write.title,
        body: write.body,
        date: write.date,
    }));

    const dispatch = useDispatch();
    const onChangeField = useCallback(
        (payload) => {
            console.log(payload);
            dispatch(changeField(payload));
        },
        [dispatch],
    );
    useEffect(() => {
        dispatch(initialize());
    }, []);
    return (
        <>
            <Editor
                onChangeField={onChangeField}
                title={title}
                body={body}
                date={date}
            />
        </>
    );
};

export default EditorContainer;
