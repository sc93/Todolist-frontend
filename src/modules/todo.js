import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
    createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as todoAPI from "../lib/api/todos";
import { takeLatest } from "redux-saga/effects";

const [
    READ_TODO,
    READ_TODO_SUCCESS,
    READ_TODO_FAILURE,
] = createRequestActionTypes("todo/READ_TODO");

const [
    REMOVE_TODO,
    REMOVE_TODO_SUCCESS,
    REMOVE_TODO_FAILURE,
] = createRequestActionTypes("todo/REMOVE_TODO");

export const readTodo = createAction(READ_TODO, (id) => ({ id }));
export const removeTodo = createAction(REMOVE_TODO, (id) => ({ id }));

const readTodoSaga = createRequestSaga(READ_TODO, todoAPI.readTodo);
const removeTodoSaga = createRequestSaga(REMOVE_TODO, todoAPI.removeTodo);

export function* todoSaga() {
    yield takeLatest(READ_TODO, readTodoSaga);
    yield takeLatest(REMOVE_TODO, removeTodoSaga);
}

const initialState = {
    todo: null,
    error: null,
    msg: "",
};

const todo = handleActions(
    {
        [READ_TODO_SUCCESS]: (state, { payload: todo }) => ({
            ...state,
            todo,
        }),
        [READ_TODO_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        }),
        [REMOVE_TODO_SUCCESS]: (state, { payload: msg }) => ({
            ...state,
            msg,
        }),
        [REMOVE_TODO_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        }),
    },
    initialState,
);

export default todo;
