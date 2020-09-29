import { createAction, handleActions } from "redux-actions";
import produce from "immer";
import createRequestSaga, {
    createRequestActionTypes,
} from "../lib/createRequestSaga";
import * as authAPI from "../lib/api/auth";
import { takeLatest } from "redux-saga/effects";

const CHANGE_FEILD = "auth/CHANGE_FEILD";
const INITIALIZE_FORM = "auth/INITIALIZE_FORM";
const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes(
    "auth/REGISTER",
);
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes(
    "auth/LOGIN",
);

export const changeFiled = createAction(
    CHANGE_FEILD,
    ({ form, key, value }) => ({
        form,
        key,
        value,
    }),
);
export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);

export const register = createAction(
    REGISTER,
    ({ userid, userpw, username }) => ({
        userid,
        userpw,
        username,
    }),
);

export const login = createAction(LOGIN, ({ userid, userpw }) => ({
    userid,
    userpw,
}));

const registerSaga = createRequestSaga(REGISTER, authAPI.register);

const loginSaga = createRequestSaga(LOGIN, authAPI.login);

export function* authSaga() {
    yield takeLatest(REGISTER, registerSaga);
    yield takeLatest(LOGIN, loginSaga);
}
const initialState = {
    login: {
        userid: "",
        userpw: "",
    },
    register: {
        userid: "",
        username: "",
        userpw: "",
        pwConfirm: "",
    },
    auth: null,
    authError: null,
};
const auth = handleActions(
    {
        [CHANGE_FEILD]: (state, { payload: { form, key, value } }) =>
            produce(state, (draft) => {
                draft[form][key] = value;
            }),
        [INITIALIZE_FORM]: (state, { payload: form }) => ({
            ...state,
            [form]: initialState[form],
        }),
        [REGISTER_SUCCESS]: (state, { payload: auth }) => ({
            ...state,
            authError: null,
            auth,
        }),
        [REGISTER_FAILURE]: (state, { payload: error }) => ({
            ...state,
            authError: error,
        }),
        [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
            ...state,
            authError: null,
            auth,
        }),
        [LOGIN_FAILURE]: (state, { payload: error }) => ({
            ...state,
            authError: error,
        }),
    },
    initialState,
);
export default auth;
