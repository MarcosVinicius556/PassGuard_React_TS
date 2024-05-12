import { combineReducers } from "redux";

import userReducer from "./user/UserReducer";

const rootReducer = combineReducers({
    user: userReducer
});

export type PassGuardState = ReturnType<typeof rootReducer>;

export default rootReducer;