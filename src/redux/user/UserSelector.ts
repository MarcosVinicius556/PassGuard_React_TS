import { createSelector } from "reselect";

import { PassGuardState } from "../RootReducer";

const getLoggedUser = (state: PassGuardState) => state.user?.user_logged

export const getLoggedUserSelector = createSelector(getLoggedUser, (user_logged) => user_logged);