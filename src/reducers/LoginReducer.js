import * as TYPES from '../utils/Constants';

const initialState = {
    loginSuccess: null,
    loginError: null,
    activeSideBar: 'Home',
    loginToken: localStorage.getItem('loginToken')
}

export function login(state = initialState, action) {
    switch (action.type) {
        case TYPES.CONSTANTS.LOGIN_SUCCESS: {
            localStorage.setItem('loginToken', action.payload.token);
            return {
                ...state,
                loginSuccess: true,
                loginToken: action.payload.token
            }
        }
        case TYPES.CONSTANTS.LOGIN_FAILURE: {
            return {
                ...state,
                loginSuccess: false,
                loginError: action.payload
            }
        }
        case TYPES.CONSTANTS.LOGOUT_SUCCESS: {
            localStorage.removeItem('loginToken');
            return {
                ...state,
                loginSuccess: false,
                loginToken: null
            }
        }
        default: {
            return {
                ...state,
                
            }
        }
    }
}
