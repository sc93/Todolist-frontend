import { createAction, handleActions } from "redux-actions";
import createRequestSaga, {
    createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as authCtrl from "../lib/api/auth";
import { takeLatest, call } from "redux-saga/effects";

const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createRequestActionTypes(
    "user/CHECK",
);

export const check = createAction(CHECK);

const checkSaga = createRequestSaga(CHECK, authCtrl.check);

export function* userSaga() {
    yield takeLatest(CHECK, checkSaga);
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
    },
    initialState,
);
