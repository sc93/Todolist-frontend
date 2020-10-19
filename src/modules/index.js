import { combineReducers } from "redux";
import auth, { authSaga } from "./auth";
import user, { userSaga } from "./user";
import { all } from "redux-saga/effects";
import todos, { todosSaga } from "./todos";
const rootReducer = combineReducers({
    auth,
    user,
    todos,
});
export function* rootSaga() {
    yield all([authSaga(), userSaga(), todosSaga()]);
}
export default rootReducer;
