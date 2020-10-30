import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
    createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as todoAPI from "../lib/api/todos";
import { takeLatest } from "redux-saga/effects";

const INITIALIZE = "write/INITIALIZE";
const CHANGE_FIELD = "write/CHANGE_FIELD";
const [
    TODO_WRITE,
    TODO_WRITE_SUCCESS,
    TODO_WRITE_FAILURE,
] = createRequestActionTypes("write/TODO_WRITE");
const [
    TODO_UPDATE,
    TODO_UPDATE_SUCCESS,
    TODO_UPDATE_FAILURE,
] = createRequestActionTypes("write/TODO_UPDATE");
const SET_ORIGINAL_TODO = "write/SET_ORIGINAL_TODO";

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
    key,
    value,
}));
export const setOriginalTodo = createAction(SET_ORIGINAL_TODO, (todo) => todo);
export const todoWrite = createAction(
    TODO_WRITE,
    ({ title, body, todo_date }) => ({
        title,
        body,
        todo_date,
    }),
);
export const todoUpdate = createAction(
    TODO_UPDATE,
    ({ id, title, body, todo_date }) => ({
        id,
        title,
        body,
        todo_date,
    }),
);

const todoWriteSaga = createRequestSaga(TODO_WRITE, todoAPI.writeTodo);
const todoUpdateSaga = createRequestSaga(TODO_UPDATE, todoAPI.updateTodo);
export function* writeSaga() {
    yield takeLatest(TODO_WRITE, todoWriteSaga);
    yield takeLatest(TODO_UPDATE, todoUpdateSaga);
}
const initialState = {
    title: "",
    body: "",
    date: "",
    error: null,
    msg: "",
    originalTodoId: "",
    todo: null,
};

const write = handleActions(
    {
        [INITIALIZE]: (state) => initialState,
        [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
            ...state,
            [key]: value,
        }),
        [TODO_WRITE_SUCCESS]: (state, { payload: msg }) => ({ ...state, msg }),
        [TODO_WRITE_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        }),
        [TODO_UPDATE_SUCCESS]: (state, { payload: msg }) => ({ ...state, msg }),
        [TODO_UPDATE_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        }),
        [SET_ORIGINAL_TODO]: (state, { payload: todo }) => {
            return {
                ...state,
                title: todo.title,
                body: todo.body,
                date: todo.todo_date,
                originalTodoId: todo.todo_id,
            };
        },
    },
    initialState,
);
export default write;
