import { action } from 'typesafe-actions';

import { IUserTypes } from './UserActionTypes';

import {
    SignInUser,
    SignInUserSuccessPayload,
    SignInUserFailurePayload,
    SignUpUser,
    SignUpUserSuccessPayload,
    SignUpUserFailurePayload,
    UpdateUserData,
    UpdateUserDataSuccessPayload,
    UpdateUserDataFailurePayload,
    LoadUserByUsername,
    LoadUserByUsernameSuccessPayload,
    LoadUserByUsernameFailurePayload,
    LoadUserByUsernameAndPassword,
    LoadUserByUsernameAndPasswordSuccessPayload,
    LoadUserByUsernameAndPasswordFailurePayload,
    LoadUserSavedPasswords,
    LoadUserSavedPasswordsSuccessPayload,
    LoadUserSavedPasswordsFailurePayload
} from './UserTypes';

export const signInUser = (payload: SignInUser) => action(IUserTypes.SIGN_IN_USER, payload);
export const signInUserSuccess = (payload: SignInUserSuccessPayload) => action(IUserTypes.SIGN_IN_USER_SUCCESS, payload);
export const signInUserFailure = (payload: SignInUserFailurePayload) => action(IUserTypes.SIGN_IN_USER_FAILURE, payload);

export const signUpUser = (payload: SignUpUser) => action(IUserTypes.SIGN_UP_USER, payload);
export const signUpUserSuccess = (payload: SignUpUserSuccessPayload) => action(IUserTypes.SIGN_UP_USER_SUCCESS, payload);
export const signUpUserFailure = (payload: SignUpUserFailurePayload) => action(IUserTypes.SIGN_UP_USER_FAILURE, payload);

export const updateUserData = (payload: UpdateUserData) => action(IUserTypes.UPDATE_USER_DATA, payload);
export const updateUserDataSuccess = (payload: UpdateUserDataSuccessPayload) => action(IUserTypes.UPDATE_USER_DATA_SUCCESS, payload);
export const updateUserDataFailure = (payload: UpdateUserDataFailurePayload) => action(IUserTypes.UPDATE_USER_DATA_FAILURE, payload);

export const loadUserByUsername = (payload: LoadUserByUsername) => action(IUserTypes.LOAD_USER_BY_USERNAME, payload);
export const loadUserByUsernameSuccess = (payload: LoadUserByUsernameSuccessPayload) => action(IUserTypes.LOAD_USER_BY_USERNAME_SUCCESS, payload);
export const loadUserByUsernameFailure = (payload: LoadUserByUsernameFailurePayload) => action(IUserTypes.LOAD_USER_BY_USERNAME_FAILURE, payload);

export const loadUserByUsernameAndPassword = (payload: LoadUserByUsernameAndPassword) => action(IUserTypes.LOAD_USER_BY_USERNAME_AND_PASSWORD, payload);
export const loadUserByUsernameAndPasswordSuccess = (payload: LoadUserByUsernameAndPasswordSuccessPayload) => action(IUserTypes.LOAD_USER_BY_USERNAME_AND_PASSWORD_SUCCESS, payload);
export const loadUserByUsernameAndPasswordFailure = (payload: LoadUserByUsernameAndPasswordFailurePayload) => action(IUserTypes.LOAD_USER_BY_USERNAME_AND_PASSWORD_FAILURE, payload);

export const loadUserSavedPasswords = (payload: LoadUserSavedPasswords) => action(IUserTypes.LOAD_USER_SAVED_PASSWORDS, payload);
export const loadUserSavedPasswordsSuccess = (payload: LoadUserSavedPasswordsSuccessPayload) => action(IUserTypes.LOAD_USER_SAVED_PASSWORDS_SUCCESS, payload);
export const loadUserSavedPasswordsFailure = (payload: LoadUserSavedPasswordsFailurePayload) => action(IUserTypes.LOAD_USER_SAVED_PASSWORDS_FAILURE, payload);