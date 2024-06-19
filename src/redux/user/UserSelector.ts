import { createSelector } from "reselect";

import { PassGuardState } from "../RootReducer";

const getLoggedUser = (state: PassGuardState) => state.user?.user_logged;
const getCredentials = (state: PassGuardState) => state.user?.credentials;
const getLogged = (state: PassGuardState) => state.user?.is_logged;
const getCreationDone = (state: PassGuardState) => state.user?.is_creation_done;
const getLoading = (state: PassGuardState) => state.user?.loading;
const getPageNumber = (state: PassGuardState) => state.user?.page_number;
const getPageSize = (state: PassGuardState) => state.user?.page_size;

export const getLoggedUserSelector = createSelector(getLoggedUser, (user_logged) => user_logged);
export const getCredentialsSelector = createSelector(getCredentials, (credentials) => credentials);
export const getLoggedSelector = createSelector(getLogged, (is_logged) => is_logged);
export const getCreationDoneSelector = createSelector(getCreationDone, (is_creation_done) => is_creation_done);
export const getLoadingSelector = createSelector(getLoading, (loading) => loading);
export const getPageNumberSelector = createSelector(getPageNumber, (page_number) => page_number);
export const getPageSizeSelector = createSelector(getPageSize, (page_size) => page_size);