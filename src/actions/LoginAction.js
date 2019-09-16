import * as TYPES from '../utils/Constants';
import { loginApi } from '../services/ServiceMethods';

export function login(params) {
    return (dispatch, getState) => {
        //From getState() we can access the reducer values
        return loginApi(params).then(response => { //Api call 
                if (response.status === 200) {
                    dispatch(loginSuccess(response)) 
                }
        }).catch(err => {
            dispatch(loginError(err))
        })
    }
}

export function loginSuccess(response) {
    return {
        type: TYPES.CONSTANTS.LOGIN_SUCCESS,
        payload: response.data
    }
}

export function loginError(error) {
    return {
        type: TYPES.CONSTANTS.LOGIN_FAILURE,
        payload: error.message
    }
}