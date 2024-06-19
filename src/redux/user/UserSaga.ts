import { call, Effect, put } from 'redux-saga/effects';
import { IUser } from '../../interfaces/User';

import { ITokenDTO } from '../../interfaces/TokenDTO';
import {
    loadUserSavedPasswordsFailure,
    loadUserSavedPasswordsSuccess,
    signInUserFailure,
    signInUserSuccess,
    signUpUserFailure,
    signUpUserSuccess,
    updateUserDataFailure,
    updateUserDataSuccess
} from './UserActions';

import PassGuardService from '../../service/PassGuardService';

export function* signInUserSaga(action: any): Generator<Effect, void, unknown> {
    try {
        let user = {
            username: action.payload.username,
            pass: action.payload.password
        }

        var response: any = yield call(PassGuardService.post, '/auth/login', user);
        let credentials: ITokenDTO = response.data;
        response = yield call(PassGuardService.get, `/users/username/${user.username}`, {
            headers: {
                'Authorization': `Bearer ${credentials.token}`
            }
        });
        let user_logged: IUser = {
            id: response.data.id,
            username: response.data.username,
            nickname: response.data.nickName,
            password: response.data.password,
            saved_passwords: response.data.savedPasswords,
        }

        yield put(signInUserSuccess({ user: user_logged, credentials }))
    } catch(error: any) {
        yield put(signInUserFailure({ error_message: error.response.data.message }))
    }
}

export function* signUpUserSaga(action: any): Generator<Effect, void, unknown>{

    try {
        let user = {
            username: action.payload.username,
            nickname: action.payload.nickname,
            pass: action.payload.password
        }

        var response: any = yield call(PassGuardService.post, '/users', user);
        
        let user_created: IUser = {
            id: response.data.id,
            username: response.data.username,
            nickname: response.data.nickName,
            password: response.data.pass,
            saved_passwords: [],
        }

        yield put(signUpUserSuccess({ user_created }))
    } catch(error: any) {
        yield put(signUpUserFailure({ error_message: error.response.data.message }))
    }
}

export function* updateUserDataSaga(action: any): Generator<Effect, void, unknown> {
    
    try {
        let userToUpdate: IUser = {
            id: action.payload.id,
            username: action.payload.username,
            nickname: action.payload.nickname,
            password: action.payload.password,
            saved_passwords: action.payload.saved_passwords
        }

        var response: any = yield call(PassGuardService.put, `/users/${userToUpdate.id}`, userToUpdate);

        let user: IUser = {
            id: response.data.id,
            username: response.data.username,
            nickname: response.data.nickName,
            password: response.data.password,
            saved_passwords: response.data.saved_passwords
        }

        yield put(updateUserDataSuccess({ user }))
    } catch(error: any) {
        yield put(updateUserDataFailure({ error_message: error.response.data.message }))
    }
}

export function* loadUserByUsernameSaga(action: any){
    throw new Error("Função não implementada");
}

export function* loadUserSavedPasswordsSaga(action: any): Generator<Effect, void, unknown>{

    try {
        let page = action.payload.page_number ? action.payload.page_number : 0;
    
        var response: any = yield call(PassGuardService.get, `/passwords/byUser/${action.payload.userId}`, {
            headers: {
                'Authorization': `Bearer ${action.payload.token}`,
                'Content-Type': 'application/json',
                page: page
            }
        });
        if(!response?.data) 
            return;

        let savedPasswords = response.data.content;
        page = response.data.number;
        let page_size = response.data.totalPages;

        yield put(loadUserSavedPasswordsSuccess({ savedPasswords, page, page_size }))
    } catch(error: any) {
        console.log(error);
        yield put(loadUserSavedPasswordsFailure({ error_message: error.response?.data.message }))
    }
}