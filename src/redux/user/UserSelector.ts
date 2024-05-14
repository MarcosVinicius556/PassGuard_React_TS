import { createSelector } from "reselect";

import { PassGuardState } from "../RootReducer";

const getLoggedUser = (state: PassGuardState) => state.user?.user_logged;
const getCredentials = (state: PassGuardState) => state.user?.credentials;
const getLogged = (state: PassGuardState) => state.user?.is_logged;
const getLoading = (state: PassGuardState) => state.user?.loading;

export const getLoggedUserSelector = createSelector(getLoggedUser, (user_logged) => user_logged);
export const getCredentialsSelector = createSelector(getCredentials, (credentials) => credentials);
export const getLoggedSelector = createSelector(getLogged, (is_logged) => is_logged);
export const getLoadingSelector = createSelector(getLoading, (loading) => loading);