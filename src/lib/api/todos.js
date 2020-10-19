import client from "./client";
import qs from "qs";
export const listTodos = ({ term, _id }) => {
    const queryString = qs.stringify({
        term,
        _id,
    });
    return client.get(`/api/todos?${queryString}`);
};
