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

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
    key,
    value,
}));
export const todoWrite = createAction(
    TODO_WRITE,
    ({ title, body, todo_date }) => ({
        title,
        body,
        todo_date,
    }),
);

const todoWriteSaga = createRequestSaga(TODO_WRITE, todoAPI.writeTodo);

export function* writeSaga() {
    yield takeLatest(TODO_WRITE, todoWriteSaga);
}
const initialState = {
    title: "",
    body: "",
    date: "",
    error: null,
    msg: "",
};

const write = handleActions(
    {
        [INITIALIZE]: (state) => initialState,
        [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
            ...state,
            [key]: value,
        }),
        [TODO_WRITE_SUCCESS]: (state, { payload: msg }) => ({ msg }),
        [TODO_WRITE_FAILURE]: (state, { payload: error }) => ({ error }),
    },
    initialState,
);
export default write;
