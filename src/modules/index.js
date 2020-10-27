import { combineReducers } from "redux";
import auth, { authSaga } from "./auth";
import user, { userSaga } from "./user";
import { all } from "redux-saga/effects";
import todos, { todosSaga } from "./todos";
import todo, { todoSaga } from "./todo";
const rootReducer = combineReducers({
    auth,
    user,
    todos,
    todo,
});
export function* rootSaga() {
    yield all([authSaga(), userSaga(), todosSaga(), todoSaga()]);
}
export default rootReducer;
