import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Main from "../../components/Main/Main";
import TodolistTemplate from "../../components/TodoList/TodolistTemplate";
import { listTodos } from "../../modules/todos";

const MainContainer = () => {
    const { user, todos } = useSelector(({ user, todos }) => ({
        user: user.user,
        todos: todos.todos,
    }));
    const dispatch = useDispatch();

    useEffect(() => {
        if (user) dispatch(listTodos({ _id: user.user._id }));
    }, [dispatch, user]);

    return user ? <TodolistTemplate todolist={todos} /> : <Main />;
};

export default MainContainer;
