import { combineReducers } from "redux";

import userReducer from "./user/UserReducer";
import passwordReducer from "./password/PasswordReducer";

const rootReducer = combineReducers({
    user: userReducer,
    password: passwordReducer
});

export type PassGuardState = ReturnType<typeof rootReducer>;

export default rootReducer;