import { action } from 'typesafe-actions';

import { IPasswordTypes } from './PasswordActionTypes';

import {
    CreateNewPasswordFailurePayload,
    CreateNewPasswordPayload,
    CreateNewPasswordSuccessPayload
} from './PasswordTypes';

export const createNewPassword = (payload: CreateNewPasswordPayload) => action(IPasswordTypes.CREATE_NEW_PASSWORD, payload);
export const createNewPasswordSuccess = (payload: CreateNewPasswordSuccessPayload) => action(IPasswordTypes.CREATE_NEW_PASSWORD_SUCCESS, payload);
export const createNewPasswordFailure = (payload: CreateNewPasswordFailurePayload) => action(IPasswordTypes.CREATE_NEW_PASSWORD_FAILURE, payload);
