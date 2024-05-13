import { toast } from "react-toastify";
import { putDataInStorage } from "../../service/StorageService";
import { IUserTypes } from "./UserActionTypes";
import { IUserState, UserActions } from "./UserTypes";

const INITIAL_USER_STATE: IUserState = {
    user_logged: {
        id: null,
        username: null,
        nickname: null,
        password: null,
        saved_passwords: []    
    },
    credentials: undefined,
    loading: false
    
}

const userReducer = (state: IUserState = INITIAL_USER_STATE, action: UserActions) => {
    switch(action.type) {
        case IUserTypes.SIGN_IN_USER:
            return {
                ...state,
                loading: true
        }
        case IUserTypes.SIGN_IN_USER_SUCCESS:
            let user = action.payload.user;
            let credentials = action.payload.credentials;

            putDataInStorage('user_information/user', user);
            putDataInStorage('user_information/credentials', credentials);
            
            return {
                ...state,
                loading: false,
                user_logged: user,
                credentials: credentials
        }
        case IUserTypes.SIGN_IN_USER_FAILURE:
            toast.error(action.payload.error_message);

            return {
                ...state,
                loading: false
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
            toast.error(action.payload.error_message);

            return {
                ...state,
                loading: false
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
            toast.error(action.payload.error_message);

            return {
                ...state,
                loading: false
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
            toast.error(action.payload.error_message);

            return {
                ...state,
                loading: false
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
            toast.error(action.payload.error_message);

            return {
                ...state,
                loading: false
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
            toast.error(action.payload.error_message);

            return {
                ...state,
                loading: false
        }
        default:
            return state;
    }
}

export default userReducer;