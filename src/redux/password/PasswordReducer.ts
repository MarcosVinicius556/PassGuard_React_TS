import { IPasswordTypes } from "./PasswordActionTypes";
import { IPasswordState, PasswordActions } from "./PasswordTypes";

const INITIAL_PASSWORD_STATE: IPasswordState = {
    saved_passwords: []
}

const passwordReducer = (state: IPasswordState = INITIAL_PASSWORD_STATE, action: PasswordActions) => {
    switch(action.type) {
        case IPasswordTypes.CREATE_NEW_PASSWORD:
            console.log('Chegou aqui!');

            return {
                ...state,
        }
        case IPasswordTypes.CREATE_NEW_PASSWORD_SUCCESS:
            console.log('Chegou aqui!');

            return {
                ...state,
        }
        case IPasswordTypes.CREATE_NEW_PASSWORD_FAILURE:
            console.log('Chegou aqui!');

            return {
                ...state,
        }
        default:
            return state;
    }
}

export default passwordReducer;