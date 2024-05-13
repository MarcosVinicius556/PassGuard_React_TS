import { IPassword } from "../../interfaces/Password";
import { IPasswordTypes } from "./PasswordActionTypes";

export interface IPasswordState {
    saved_passwords: IPassword[];
}

/**
 * CREATE NEW PASSWORD
 */

export interface CreateNewPassword {
    type: typeof IPasswordTypes.CREATE_NEW_PASSWORD;
    payload: CreateNewPasswordPayload;
}

export interface CreateNewPasswordPayload {
    name: string
}

export interface CreateNewPasswordSuccess {
    type: typeof IPasswordTypes.CREATE_NEW_PASSWORD_SUCCESS;
    payload: CreateNewPasswordSuccessPayload;
}

export interface CreateNewPasswordSuccessPayload {
    saved: boolean
}

export interface CreateNewPasswordFailure {
    type: typeof IPasswordTypes.CREATE_NEW_PASSWORD_FAILURE;
    payload: CreateNewPasswordFailurePayload;
}

export interface CreateNewPasswordFailurePayload {
    readonly error_message: string;
}

/**
 * EXPORT ALL ACTIONS AVAILABLE...
 */

export type PasswordActions = 
                        | CreateNewPassword
                        | CreateNewPasswordSuccess
                        | CreateNewPasswordFailure;