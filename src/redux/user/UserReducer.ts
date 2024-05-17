import { toast } from "react-toastify";
import { putDataInStorage, removeDataFromStorage } from "../../service/StorageService";
import { IUserTypes } from "./UserActionTypes";
import { IUserState, UserActions } from "./UserTypes";
import { CREDENTIALS_ITEM_NAME, USER_ITEM_NAME } from "../../utils/StorageItemNames";

const INITIAL_USER_STATE: IUserState = {
    user_logged: {
        id: null,
        username: null,
        nickname: null,
        password: null,
        saved_passwords: []    
    },
    credentials: undefined,
    is_logged: false,
    is_creation_done: false,
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
            putDataInStorage(USER_ITEM_NAME, user);
            putDataInStorage(CREDENTIALS_ITEM_NAME, credentials);
            
            return {
                ...state,
                loading: false,
                user_logged: user,
                is_logged: true,
                credentials: credentials
        }
        case IUserTypes.SIGN_IN_USER_FAILURE:
            toast.error(action.payload.error_message);

            return {
                ...state,
                loading: false
        }
        case IUserTypes.SIGN_UP_USER:
            return {
                ...state,
                loading: true
        }
        case IUserTypes.SIGN_UP_USER_SUCCESS:
            toast.success('Usuário criado com sucesso, em instantes você será direcionado para a página de login!')
            return {
                ...state,
                user_logged: action.payload.user_created,
                is_creation_done: true,
                loading: false,
        }
        case IUserTypes.SIGN_UP_USER_FAILURE:
            console.log('Chegou aqui!');
            toast.error(action.payload.error_message);

            return {
                ...state,
                loading: false
        }
        case IUserTypes.UPDATE_USER_DATA:
            return {
                ...state,
                loading: true,
        }
        case IUserTypes.UPDATE_USER_DATA_SUCCESS:

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
        case IUserTypes.LOGGOUT:

        removeDataFromStorage(USER_ITEM_NAME);
        removeDataFromStorage(CREDENTIALS_ITEM_NAME);

            return {
                state: INITIAL_USER_STATE,
        }
        default:
            return state;
    }
}

export default userReducer;