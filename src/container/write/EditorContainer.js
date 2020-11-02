import React from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Editor from "../../components/write/Editor";
import { changeField, initialize, setFile } from "../../modules/write";

const EditorContainer = () => {
    const { title, body, todo_date, thumbnail } = useSelector(({ write }) => {
        return {
            title: write.title,
            body: write.body,
            todo_date: write.date,
            thumbnail: write.thumbnail,
        };
    });

    const dispatch = useDispatch();
    const onChangeField = useCallback(
        (payload) => {
            dispatch(changeField(payload));
        },
        [dispatch],
    );

    const onChangeFile = useCallback(
        (payload) => {
            dispatch(setFile(payload));
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
                onChangeFile={onChangeFile}
                title={title}
                body={body}
                date={todo_date}
                thumbnail={thumbnail}
            />
        </>
    );
};

export default EditorContainer;
