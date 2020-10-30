import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import TodoActionButtons from "../../components/Todo/TodoActionButtons";
import TodoViewer from "../../components/Todo/TodoViewer";
import { readTodo, removeTodo } from "../../modules/todo";
import { setOriginalTodo } from "../../modules/write";

const TodoViewerContainer = () => {
    const history = useHistory();
    const { id } = useParams();
    const { todo } = useSelector(({ todo }) => ({
        todo: todo.todo,
    }));
    const dispatch = useDispatch();
    const onEdit = () => {
        dispatch(setOriginalTodo(todo));
        history.push("/write");
    };
    const onRemove = () => {
        dispatch(removeTodo(id));
        history.push("/");
    };
    const onGoBack = () => {
        history.goBack();
    };
    useEffect(() => {
        dispatch(readTodo(id));
    }, [dispatch, id]);

    return (
        <>
            <TodoViewer todo={todo} />
            <TodoActionButtons
                onEdit={onEdit}
                onRemove={onRemove}
                onGoBack={onGoBack}
            />
        </>
    );
};

export default TodoViewerContainer;
