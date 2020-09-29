import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
    createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as authAPI from "../lib/api/auth";
import { takeLatest, call } from "redux-saga/effects";

const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createRequestActionTypes(
    "user/CHECK",
);
const LOGOUT = "user/LOGOUT";

export const check = createAction(CHECK);
export const logout = createAction(LOGOUT);

const checkSaga = createRequestSaga(CHECK, authAPI.check);

function* logoutSaga() {
    yield call(authAPI.logout);
}
export function* userSaga() {
    yield takeLatest(CHECK, checkSaga);
    yield takeLatest(LOGOUT, logoutSaga);
}
const initialState = {
    user: null,
    checkError: null,
};

export default handleActions(
    {
        [CHECK_SUCCESS]: (state, { payload: user }) => ({
            ...state,
            user,
            checkError: null,
        }),
        [CHECK_FAILURE]: (state, { payload: error }) => ({
            ...state,
            user: null,
            checkError: error,
        }),
        [LOGOUT]: (state, { payload: error }) => ({
            ...state,
            user: null,
            checkError: error,
        }),
    },
    initialState,
);
