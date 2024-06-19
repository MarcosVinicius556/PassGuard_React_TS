import { toast } from "react-toastify";
import { putDataInStorage, removeDataFromStorage } from "../../service/StorageService";
import { CREDENTIALS_ITEM_NAME, USER_ITEM_NAME } from "../../utils/StorageItemNames";
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
    is_logged: false,
    is_creation_done: false,
    page_number: 0,
    page_size: 0,
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
            toast.error(action.payload.error_message);

            return {
                ...state,
                loading: false
        }
        case IUserTypes.LOAD_USER_BY_USERNAME:

            return {
                ...state,
        }
        case IUserTypes.LOAD_USER_BY_USERNAME_SUCCESS:

            return {
                ...state,
        }
        case IUserTypes.LOAD_USER_BY_USERNAME_FAILURE:
            toast.error(action.payload.error_message);

            return {
                ...state,
                loading: false
        }
        case IUserTypes.LOAD_USER_SAVED_PASSWORDS:
            console.log("BUSCANDO SENHAAAAAAAAAS");
            console.log(action.payload)
            console.log(state)
            console.log(action.payload.page_number > state.page_size)
            if(action.payload.page_number > state.page_size) {
                toast.warn("Não há mais registros para buscar!")
                return {
                    ...state    
                }
            }

            if(state.page_number < 0) {
                toast.warn("Você está na primeira página!")
                return {
                    ...state    
                }
            }

            return {
                ...state,
                loading: true,
        }
        case IUserTypes.LOAD_USER_SAVED_PASSWORDS_SUCCESS:

            return {
                ...state,
                loading: false,
                page_number: action.payload.page,
                page_size: action.payload.page_size,
                user_logged: {
                    ...state.user_logged,
                    saved_passwords: action.payload.savedPasswords
                }
        }
        case IUserTypes.LOAD_USER_SAVED_PASSWORDS_FAILURE:
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