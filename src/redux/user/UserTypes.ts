import { IPassword } from "../../interfaces/Password";
import { ITokenDTO } from "../../interfaces/TokenDTO";
import { IUser } from "../../interfaces/User";
import { IUserTypes } from "./UserActionTypes";

export interface IUserState {
    user_logged: IUser;
    page_number: number;
    page_size: number;
    credentials: ITokenDTO | undefined;
    is_logged: boolean;
    is_creation_done: boolean;
    loading: boolean;
}

/**
 * SIGN IN
 */

export interface SignInUser {
    type: typeof IUserTypes.SIGN_IN_USER;
    payload: SignInUserPayload;
}

export interface SignInUserPayload {
    username: string;
    password: string;
}

export interface SignInUserSuccess {
    type: typeof IUserTypes.SIGN_IN_USER_SUCCESS;
    payload: SignInUserSuccessPayload;
}

export interface SignInUserSuccessPayload {
    user: IUser;
    credentials: ITokenDTO;
}

export interface SignInUserFailure {
    type: typeof IUserTypes.SIGN_IN_USER_FAILURE;
    payload: SignInUserFailurePayload;
}

export interface SignInUserFailurePayload {
    readonly error_message: string;
}

/**
 * SIGN UP
 */


export interface SignUpUserPayload {
    username: string;
    nickname: string;
    password: string;
}

export interface SignUpUser {
    type: typeof IUserTypes.SIGN_UP_USER;
    payload: SignUpUserPayload;
}

export interface SignUpUserSuccess {
    type: typeof IUserTypes.SIGN_UP_USER_SUCCESS;
    payload: SignUpUserSuccessPayload;
}

export interface SignUpUserSuccessPayload {
    user_created: IUser;
}

export interface SignUpUserFailure {
    type: typeof IUserTypes.SIGN_UP_USER_FAILURE;
    payload: SignUpUserFailurePayload;
}

export interface SignUpUserFailurePayload {
    readonly error_message: string
}

/**
 * UPDATE USER DATA
 */

export interface UpdateUserData {
    type: typeof IUserTypes.UPDATE_USER_DATA;
    payload: UpdateUserDataPayload;
}

export interface UpdateUserDataPayload {
    username: string;
    nickname: string;
    alterarSenha: boolean;
    password: string;
}

export interface UpdateUserDataSuccess {
    type: typeof IUserTypes.UPDATE_USER_DATA_SUCCESS;
    payload: UpdateUserDataSuccessPayload;
}

export interface UpdateUserDataSuccessPayload {
    user: IUser;
}

export interface UpdateUserDataFailure {
    type: typeof IUserTypes.UPDATE_USER_DATA_FAILURE;
    payload: UpdateUserDataFailurePayload;
}

export interface UpdateUserDataFailurePayload {
    readonly error_message: string;
}

/**
 * LOAD BY USERNAME
 */

export interface LoadUserByUsername {
    type: typeof IUserTypes.LOAD_USER_BY_USERNAME;
    payload: LoadUserByUsernamePayload;
}

export interface LoadUserByUsernamePayload {
    username: string;
}

export interface LoadUserByUsernameSuccess {
    type: typeof IUserTypes.LOAD_USER_BY_USERNAME_SUCCESS;
    payload: LoadUserByUsernameSuccessPayload;
}

export interface LoadUserByUsernameSuccessPayload {
    requestedUser: IUser;
}

export interface LoadUserByUsernameFailure {
    type: typeof IUserTypes.LOAD_USER_BY_USERNAME_FAILURE;
    payload: LoadUserByUsernameFailurePayload;
}

export interface LoadUserByUsernameFailurePayload {
    readonly error_message: string;
}

/**
 * LOAD SAVED PASSWORDS
 */

export interface LoadUserSavedPasswords {
    type: typeof IUserTypes.LOAD_USER_SAVED_PASSWORDS;
    payload: LoadUserSavedPasswordsPayload;
}

export interface LoadUserSavedPasswordsPayload {
    userId: number | null;
    token: string;
    page_number: number;
}

export interface LoadUserSavedPasswordsSuccess {
    type: typeof IUserTypes.LOAD_USER_SAVED_PASSWORDS_SUCCESS;
    payload: LoadUserSavedPasswordsSuccessPayload;
}

export interface LoadUserSavedPasswordsSuccessPayload {
    savedPasswords: IPassword[];
    page: number;
    page_size: number;
}

export interface LoadUserSavedPasswordsFailure {
    type: typeof IUserTypes.LOAD_USER_SAVED_PASSWORDS_FAILURE;
    payload: LoadUserSavedPasswordsFailurePayload;
}

export interface LoadUserSavedPasswordsFailurePayload {
    readonly error_message: string;
}

/**
 * Loggout
 */

export interface Loggout {
    type: typeof IUserTypes.LOGGOUT;
}

/**
 * EXPORT ALL ACTIONS AVAILABLE...
 */

export type UserActions = 
                        | SignInUser
                        | SignInUserSuccess
                        | SignInUserFailure
                        | SignUpUser 
                        | SignUpUserSuccess
                        | SignUpUserFailure 
                        | UpdateUserData
                        | UpdateUserDataSuccess
                        | UpdateUserDataFailure
                        | LoadUserByUsername 
                        | LoadUserByUsernameSuccess 
                        | LoadUserByUsernameFailure
                        | LoadUserSavedPasswords
                        | LoadUserSavedPasswordsSuccess
                        | LoadUserSavedPasswordsFailure
                        | Loggout;