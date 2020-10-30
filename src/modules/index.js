import { combineReducers } from "redux";
import auth, { authSaga } from "./auth";
import user, { userSaga } from "./user";
import { all } from "redux-saga/effects";
import todos, { todosSaga } from "./todos";
import todo, { todoSaga } from "./todo";
import write, { writeSaga } from "./write";
const rootReducer = combineReducers({
    auth,
    user,
    todos,
    todo,
    write,
});
export function* rootSaga() {
    yield all([authSaga(), userSaga(), todosSaga(), todoSaga(), writeSaga()]);
}
export default rootReducer;
