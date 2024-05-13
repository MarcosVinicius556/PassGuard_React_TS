import { put, call, Effect } from 'redux-saga/effects';
import { IUSer } from '../../interfaces/User';

import { IPassword } from '../../interfaces/Password';
import { ITokenDTO } from '../../interfaces/TokenDTO';
import {
    loadUserByUsernameAndPasswordFailure,
    loadUserByUsernameAndPasswordSuccess,
    loadUserByUsernameFailure,
    loadUserByUsernameSuccess,
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
        let user_logged = response.data;

        yield put(signInUserSuccess({ user: user_logged, credentials }))
    } catch(error: any) {
        yield put(signInUserFailure({ error_message: error.message }))
    }
}

export function* signUpUserSaga(action: any){

    console.log(action);

    let credentials: ITokenDTO = {
        token: 'TOKEN TESTE',
        expires_at: 'Daqui um tempo....',
    }
    try {
        yield put(signUpUserSuccess({ credentials }))
    } catch(error: any) {
        yield put(signUpUserFailure({ error_message: error.message }))
    }
}

export function* updateUserDataSaga(action: any){

    console.log(action);

    let newUser: IUSer = {
        id: 1,
        username: 'Teste',
        nickname: 'teste',
        password: 'teste',
        saved_passwords: []
    }
    try {
        yield put(updateUserDataSuccess({ newUser }))
    } catch(error: any) {
        yield put(updateUserDataFailure({ error_message: error.message }))
    }
}

export function* loadUserByUsernameSaga(action: any){

    console.log(action);

    let requestedUser: IUSer = {
        id: 1,
        username: 'Teste',
        nickname: 'teste',
        password: 'teste',
        saved_passwords: []
    }
    try {
        yield put(loadUserByUsernameSuccess({ requestedUser }))
    } catch(error: any) {
        yield put(loadUserByUsernameFailure({ error_message: error.message }))
    }
}

export function* loadUserByUsernameAndPasswordSaga(action: any){

    console.log(action);

    let requestedUser: IUSer = {
        id: 1,
        username: 'Teste',
        nickname: 'teste',
        password: 'teste',
        saved_passwords: []
    }
    try {
        yield put(loadUserByUsernameAndPasswordSuccess({ requestedUser }))
    } catch(error: any) {
        yield put(loadUserByUsernameAndPasswordFailure({ error_message: error.message }))
    }
}

export function* loadUserSavedPasswordsSaga(action: any){

    console.log(action);

    let savedPasswords: IPassword[] = [{
        id: 1,
        description: 'Teste',
        name: 'TESTE',
        username: 'Teste',
        password: 'teste',
    }]
    try {
        yield put(loadUserSavedPasswordsSuccess({ savedPasswords }))
    } catch(error: any) {
        yield put(loadUserSavedPasswordsFailure({ error_message: error.message }))
    }
}