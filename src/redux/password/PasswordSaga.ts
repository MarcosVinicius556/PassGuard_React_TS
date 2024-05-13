import { put } from 'redux-saga/effects';

import {
    createNewPasswordFailure,
    createNewPasswordSuccess
} from './PasswordActions';

export function* createNewPasswordSaga(action: any){

    console.log(action);

    let saved = true
    try {
        yield put(createNewPasswordSuccess({ saved }))
    } catch(error: any) {
        yield put(createNewPasswordFailure({ error_message: error.message }))
    }
}
