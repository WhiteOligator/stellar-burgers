import { TUser } from "../../utils/TypesAndIntareface";
import {
    REGISTER_USER_ERROR,
    REGISTER_USER_ERROR_NULL,
    LOGIN_USER_ERROR,
    LOGIN_USER_ERROR_NULL,
    SET_USER,
    REGISTER_USER_SUCCESS,
    LOGOUT,
    FORGOT_PASSWORD_ERROR,
    FORGOT_PASSWORD_ERROR_NULL,
    FORGOT_PASSWORD_SUCCESS,
    RESET_PASSWORD_ERROR,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_ERROR_NULL,
    GET_USER,
    UPDATE_USER,
    UPDATE_ERROR,
    UPDATE_SUCCESS,
    UPDATE_START,
} from "../actionType/userType"


interface registerUserErorrAction {
    readonly type: typeof REGISTER_USER_ERROR;
    readonly payload: string;
    
}

interface registerUserSuccessAction {
    readonly type: typeof REGISTER_USER_SUCCESS;
}

interface loginUserErorrAction {
    readonly type: typeof LOGIN_USER_ERROR;
    readonly payload: string;
}

interface registerUserErorrNullAction {
    readonly type: typeof REGISTER_USER_ERROR_NULL;
}

interface loginUserErorrNullAction {
    readonly type: typeof LOGIN_USER_ERROR_NULL;
}

interface setUserAction {
    readonly type: typeof SET_USER;
    readonly user: TUser
}

interface logoutAction {
    readonly type: typeof LOGOUT;
}

interface forgotPasswordErrorAction {
    readonly type: typeof FORGOT_PASSWORD_ERROR;
    readonly payload: string;
}

interface forgotPasswordErrorNullAction {
    readonly type: typeof FORGOT_PASSWORD_ERROR_NULL;
}

interface forgotPasswordSuccessAction {
    readonly type: typeof FORGOT_PASSWORD_SUCCESS;
}

interface resetPasswordErrorAction {
    readonly type: typeof RESET_PASSWORD_ERROR;
    readonly payload: string;
}

interface resetPasswordErrorNullAction {
    readonly type: typeof RESET_PASSWORD_ERROR_NULL;
}

interface resetPasswordSuccessAction {
    readonly type: typeof RESET_PASSWORD_SUCCESS;
}

interface getUserCreatorsAction {
    readonly type: typeof GET_USER;
    readonly payload: TUser
}

interface updateUserCreatorsAction {
    readonly type: typeof UPDATE_USER;
    readonly payload: TUser
}
////
interface updateUserCreatorsErrorAction {
    readonly type: typeof UPDATE_ERROR;
    readonly payload: string;
}

interface updateUserCreatorsSuccessAction {
    readonly type: typeof UPDATE_SUCCESS;
}

interface updateUserCreatorsStartAction {
    readonly type: typeof UPDATE_START;
}


export type TUserCreatorsAction = 
    | registerUserErorrAction
    | registerUserSuccessAction
    | loginUserErorrAction
    | registerUserErorrNullAction
    | loginUserErorrNullAction
    | setUserAction
    | logoutAction
    | forgotPasswordErrorAction
    | forgotPasswordErrorNullAction
    | forgotPasswordSuccessAction
    | resetPasswordErrorAction
    | resetPasswordErrorNullAction
    | resetPasswordSuccessAction
    | getUserCreatorsAction
    | updateUserCreatorsAction
    | updateUserCreatorsErrorAction
    | updateUserCreatorsSuccessAction
    | updateUserCreatorsStartAction;

export const registerUserErorr = (error: string): registerUserErorrAction => ({
    type: REGISTER_USER_ERROR,
    payload: error,
})

export const registerUserSuccess = () : registerUserSuccessAction => ({
    type: REGISTER_USER_SUCCESS,
})

export const loginUserErorr = (error: string) : loginUserErorrAction => ({
    type: LOGIN_USER_ERROR,
    payload: error,
})

export const registerUserErorrNull = () : registerUserErorrNullAction => ({
    type: REGISTER_USER_ERROR_NULL,
})

export const loginUserErorrNull = () : loginUserErorrNullAction => ({
    type: LOGIN_USER_ERROR_NULL,
})

export const setUser = (user: TUser): setUserAction => 
    ({
        type: SET_USER,
        user: user,
})


export const logout = () : logoutAction => ({
    type: LOGOUT,
})


export const forgotPasswordError = (error: string) : forgotPasswordErrorAction => ({
    type: FORGOT_PASSWORD_ERROR,
    payload: error,
})


export const forgotPasswordErrorNull = () : forgotPasswordErrorNullAction => ({
    type: FORGOT_PASSWORD_ERROR_NULL,
})

export const forgotPasswordSuccess = () : forgotPasswordSuccessAction  => ({
    type: FORGOT_PASSWORD_SUCCESS,
})


export const resetPasswordError = (error: string) : resetPasswordErrorAction  => ({
    type: RESET_PASSWORD_ERROR,
    payload: error,
})


export const resetPasswordErrorNull = () : resetPasswordErrorNullAction => ({
    type: RESET_PASSWORD_ERROR_NULL,
})


export const resetPasswordSuccess = () : resetPasswordSuccessAction => ({
    type: RESET_PASSWORD_SUCCESS,
})


export const getUserCreators = (config : TUser) : getUserCreatorsAction => ({
    type: GET_USER,
    payload: config,
})

export const updateUserCreators = (config : TUser): updateUserCreatorsAction => ({
    type: UPDATE_USER,
    payload: config,
})

export const updateUserCreatorsError = (error: string) : updateUserCreatorsErrorAction => ({
    type: UPDATE_ERROR,
    payload: error,
})

export const updateUserCreatorsSuccess = () : updateUserCreatorsSuccessAction => ({
    type: UPDATE_SUCCESS,
})

export const updateUserCreatorsStart = () : updateUserCreatorsStartAction => ({
    type: UPDATE_START,
})