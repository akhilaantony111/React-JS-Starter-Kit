import { apiMethod } from './ApiMethods';
import * as TYPES from '../utils/Constants';

export const loginApi = (params) => {
    return apiMethod.post(TYPES.URL.LOGIN_URL, params)
}