import { IUserTypes } from "./UserActionTypes";
import { IUserState, UserActions } from "./UserTypes";

const INITIAL_USER_STATE: IUserState = {
    user_logged: {
        id: null,
        username: null,
        nickname: null,
        password: null,
        saved_passwords: []    
    }
    
}

const userReducer = (state: IUserState = INITIAL_USER_STATE, action: UserActions) => {
    switch(action.type) {
        case IUserTypes.SIGN_IN_USER:
            console.log('Chegou aqui!');

            return {
                ...state,
        }
        case IUserTypes.SIGN_IN_USER_SUCCESS:
            console.log('Chegou aqui!');

            return {
                ...state,
        }
        case IUserTypes.SIGN_IN_USER_FAILURE:
            console.log('Chegou aqui!');

            return {
                ...state,
        }
        case IUserTypes.SIGN_UP_USER:
            console.log('Chegou aqui!');

            return {
                ...state,
        }
        case IUserTypes.SIGN_UP_USER_SUCCESS:
            console.log('Chegou aqui!');

            return {
                ...state,
        }
        case IUserTypes.SIGN_UP_USER_FAILURE:
            console.log('Chegou aqui!');

            return {
                ...state,
        }
        case IUserTypes.UPDATE_USER_DATA:
            console.log('Chegou aqui!');

            return {
                ...state,
        }
        case IUserTypes.UPDATE_USER_DATA_SUCCESS:
            console.log('Chegou aqui!');

            return {
                ...state,
        }
        case IUserTypes.UPDATE_USER_DATA_FAILURE:
            console.log('Chegou aqui!');

            return {
                ...state,
        }
        case IUserTypes.LOAD_USER_BY_USERNAME:
            console.log('Chegou aqui!');

            return {
                ...state,
        }
        case IUserTypes.LOAD_USER_BY_USERNAME_SUCCESS:
            console.log('Chegou aqui!');

            return {
                ...state,
        }
        case IUserTypes.LOAD_USER_BY_USERNAME_FAILURE:
            console.log('Chegou aqui!');

            return {
                ...state,
        }
        case IUserTypes.LOAD_USER_BY_USERNAME_AND_PASSWORD:
            console.log('Chegou aqui!');

            return {
                ...state,
        }
        case IUserTypes.LOAD_USER_BY_USERNAME_AND_PASSWORD_SUCCESS:
            console.log('Chegou aqui!');

            return {
                ...state,
        }
        case IUserTypes.LOAD_USER_BY_USERNAME_AND_PASSWORD_FAILURE:
            console.log('Chegou aqui!');

            return {
                ...state,
        }
        case IUserTypes.LOAD_USER_SAVED_PASSWORDS:
            console.log('Chegou aqui!');

            return {
                ...state,
        }
        case IUserTypes.LOAD_USER_SAVED_PASSWORDS_SUCCESS:
            console.log('Chegou aqui!');

            return {
                ...state,
        }
        case IUserTypes.LOAD_USER_SAVED_PASSWORDS_FAILURE:
            console.log('Chegou aqui!');

            return {
                ...state,
        }
        default:
            return state;
    }
}

export default userReducer;