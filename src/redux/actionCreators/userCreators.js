import {
    REGISTER_USER_ERROR,
    REGISTER_USER_ERROR_NULL,
    LOGIN_USER_ERROR,
    LOGIN_USER_ERROR_NULL,
    SET_USER,
    REGISTER_USER_SUCCESS,
    UPLOAD_TOKEN,
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

export const registerUserErorr = (error) => ({
    type: REGISTER_USER_ERROR,
    payload: error,
})

export const registerUserSuccess = () => ({
    type: REGISTER_USER_SUCCESS,
})

export const loginUserErorr = (error) => ({
    type: LOGIN_USER_ERROR,
    payload: error,
})

export const registerUserErorrNull = () => ({
    type: REGISTER_USER_ERROR_NULL,
})

export const loginUserErorrNull = () => ({
    type: LOGIN_USER_ERROR_NULL,
})

export const setUser = (user) => ({
    type: SET_USER,
    user: user,
})


export const logout = (config) => ({
    type: LOGOUT,
})


export const forgotPasswordError = (error) => ({
    type: FORGOT_PASSWORD_ERROR,
    payload: error,
})


export const forgotPasswordErrorNull = () => ({
    type: FORGOT_PASSWORD_ERROR_NULL,
})

export const forgotPasswordSuccess = () => ({
    type: FORGOT_PASSWORD_SUCCESS,
})


export const resetPasswordError = (error) => ({
    type: RESET_PASSWORD_ERROR,
    payload: error,
})


export const resetPasswordErrorNull = () => ({
    type: RESET_PASSWORD_ERROR_NULL,
})

export const resetPasswordSuccess = () => ({
    type: RESET_PASSWORD_SUCCESS,
})


export const getUserCreators = (config) => ({
    type: GET_USER,
    payload: config,
})

export const updateUserCreators = (config) => ({
    type: UPDATE_USER,
    payload: config,
})

export const updateUserCreatorsError = (error) => ({
    type: UPDATE_ERROR,
    payload: error,
})

export const updateUserCreatorsSuccess = () => ({
    type: UPDATE_SUCCESS,
})

export const updateUserCreatorsStart = () => ({
    type: UPDATE_START,
})