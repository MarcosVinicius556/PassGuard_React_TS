import { createSelector } from "reselect";

import { PassGuardState } from "../RootReducer";

const getSavedPasswords = (state: PassGuardState) => state.password?.saved_passwords

export const getSavedPasswordsSelector = createSelector(getSavedPasswords, (saved_passwords) => saved_passwords);