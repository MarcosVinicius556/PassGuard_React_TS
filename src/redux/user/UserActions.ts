import { action } from 'typesafe-actions';

import { IUserTypes } from './UserActionTypes';

import {
    LoadUserByUsernameFailurePayload,
    LoadUserByUsernamePayload,
    LoadUserByUsernameSuccessPayload,
    LoadUserSavedPasswordsFailurePayload,
    LoadUserSavedPasswordsPayload,
    LoadUserSavedPasswordsSuccessPayload,
    SignInUserFailurePayload,
    SignInUserPayload,
    SignInUserSuccessPayload,
    SignUpUserFailurePayload,
    SignUpUserPayload,
    SignUpUserSuccessPayload,
    UpdateUserDataFailurePayload,
    UpdateUserDataPayload,
    UpdateUserDataSuccessPayload
} from './UserTypes';

export const signInUser = (payload: SignInUserPayload) => action(IUserTypes.SIGN_IN_USER, payload);
export const signInUserSuccess = (payload: SignInUserSuccessPayload) => action(IUserTypes.SIGN_IN_USER_SUCCESS, payload);
export const signInUserFailure = (payload: SignInUserFailurePayload) => action(IUserTypes.SIGN_IN_USER_FAILURE, payload);

export const signUpUser = (payload: SignUpUserPayload) => action(IUserTypes.SIGN_UP_USER, payload);
export const signUpUserSuccess = (payload: SignUpUserSuccessPayload) => action(IUserTypes.SIGN_UP_USER_SUCCESS, payload);
export const signUpUserFailure = (payload: SignUpUserFailurePayload) => action(IUserTypes.SIGN_UP_USER_FAILURE, payload);

export const updateUserData = (payload: UpdateUserDataPayload) => action(IUserTypes.UPDATE_USER_DATA, payload);
export const updateUserDataSuccess = (payload: UpdateUserDataSuccessPayload) => action(IUserTypes.UPDATE_USER_DATA_SUCCESS, payload);
export const updateUserDataFailure = (payload: UpdateUserDataFailurePayload) => action(IUserTypes.UPDATE_USER_DATA_FAILURE, payload);

export const loadUserByUsername = (payload: LoadUserByUsernamePayload) => action(IUserTypes.LOAD_USER_BY_USERNAME, payload);
export const loadUserByUsernameSuccess = (payload: LoadUserByUsernameSuccessPayload) => action(IUserTypes.LOAD_USER_BY_USERNAME_SUCCESS, payload);
export const loadUserByUsernameFailure = (payload: LoadUserByUsernameFailurePayload) => action(IUserTypes.LOAD_USER_BY_USERNAME_FAILURE, payload);

export const loadUserSavedPasswords = (payload: LoadUserSavedPasswordsPayload) => action(IUserTypes.LOAD_USER_SAVED_PASSWORDS, payload);
export const loadUserSavedPasswordsSuccess = (payload: LoadUserSavedPasswordsSuccessPayload) => action(IUserTypes.LOAD_USER_SAVED_PASSWORDS_SUCCESS, payload);
export const loadUserSavedPasswordsFailure = (payload: LoadUserSavedPasswordsFailurePayload) => action(IUserTypes.LOAD_USER_SAVED_PASSWORDS_FAILURE, payload);

export const loggout = () => action(IUserTypes.LOGGOUT);