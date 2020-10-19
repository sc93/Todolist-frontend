import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
    createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as todosAPI from "../lib/api/todos";
import { takeLatest, call } from "redux-saga/effects";

const [
    LIST_TODOS,
    LIST_TODOS_SUCCESS,
    LIST_TODOS_FAILURE,
] = createRequestActionTypes("posts/LIST_TODOS");

export const listTodos = createAction(LIST_TODOS, ({ term, _id }) => ({
    term,
    _id,
}));

const listTodosSaga = createRequestSaga(LIST_TODOS, todosAPI.listTodos);

export function* todosSaga() {
    yield takeLatest(listTodos, listTodosSaga);
}

const initialState = {
    todos: [],
    error: null,
};

const todos = handleActions(
    {
        [LIST_TODOS_SUCCESS]: (state, { payload: todos, meta: response }) => ({
            ...state,
            todos,
        }),
        [LIST_TODOS_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error,
        }),
    },
    initialState,
);

export default todos;