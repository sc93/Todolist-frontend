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
    return client.get(`/api/todos/${id}`);
};

export const writeTodo = ({ title, body, todo_date, thumbnail }) => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("body", body);
    formData.append("todo_date", todo_date);
    formData.append("thumbnail", thumbnail);
    console.log(thumbnail);
    console.log(formData);
    return client.post(`/api/todos`, formData);
};

export const updateTodo = ({ id, title, body, todo_date }) => {
    return client.patch(`/api/todos/${id}`, { title, body, todo_date });
};

export const removeTodo = ({ id }) => {
    return client.delete(`/api/todos/${id}`);
};
