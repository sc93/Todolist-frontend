import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import TodoViewer from "../../components/Todo/TodoViewer";
import { readTodo } from "../../modules/todo";

const TodoViewerContainer = () => {
    const { id } = useParams();
    const { todo } = useSelector(({ todo }) => ({
        todo,
    }));
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(readTodo(id));
    }, [dispatch, id]);
    return (
        <div>
            <TodoViewer todo={todo} />
        </div>
    );
};

export default TodoViewerContainer;
