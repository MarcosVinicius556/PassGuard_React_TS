import { all, takeLatest } from 'redux-saga/effects';

import { IUserTypes } from './user/UserActionTypes';

import {
    signInUserSaga,
    signUpUserSaga,
    updateUserDataSaga,
    loadUserByUsernameSaga,
    loadUserByUsernameAndPasswordSaga,
    loadUserSavedPasswordsSaga
} from './user/UserSaga';

import {
    createNewPasswordSaga
} from './password/PasswordSaga'
import { IPasswordTypes } from './password/PasswordActionTypes';

export default function* rootSaga(): any {
    return yield all([
        takeLatest(IUserTypes.SIGN_IN_USER, signInUserSaga),
        takeLatest(IUserTypes.SIGN_UP_USER, signUpUserSaga),
        takeLatest(IUserTypes.UPDATE_USER_DATA, updateUserDataSaga),
        takeLatest(IUserTypes.LOAD_USER_BY_USERNAME, loadUserByUsernameSaga),
        takeLatest(IUserTypes.LOAD_USER_BY_USERNAME_AND_PASSWORD, loadUserByUsernameAndPasswordSaga),
        takeLatest(IUserTypes.LOAD_USER_SAVED_PASSWORDS, loadUserSavedPasswordsSaga),
        /* Password */
        takeLatest(IPasswordTypes.CREATE_NEW_PASSWORD, createNewPasswordSaga)
    ]);
}