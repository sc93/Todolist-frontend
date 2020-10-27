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
] = createRequestActionTypes("READ_TODO");

export const readTodo = createAction(READ_TODO, (id) => ({ id }));

const readTodoSaga = createRequestSaga(READ_TODO, todoAPI.readTodo);

export function* todoSaga() {
    yield takeLatest(readTodo, readTodoSaga);
}

const initialState = {
    todo: null,
    error: null,
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
    },
    initialState,
);

export default todo;
