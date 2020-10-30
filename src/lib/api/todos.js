import client from "./client";
import qs from "qs";
export const listTodos = ({ term, _id }) => {
    const queryString = qs.stringify({
        term,
        _id,
    });
    return client.get(`/api/todos?${queryString}`);
};

export const readTodo = ({ id }) => {
    console.log(id);
    return client.get(`/api/todos/${id}`);
};

export const writeTodo = ({ title, body, todo_date }) => {
    return client.post(`/api/todos`, { title, body, todo_date });
};

export const updateTodo = ({ id, title, body, todo_date }) => {
    return client.patch(`/api/todos/${id}`, { title, body, todo_date });
};

export const removeTodo = ({ id }) => {
    return client.delete(`/api/todos/${id}`);
};
