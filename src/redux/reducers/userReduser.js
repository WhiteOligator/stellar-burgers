import {
    REGISTER_USER_ERROR,
    REGISTER_USER_ERROR_NULL,
    SET_USER,
    LOGIN_USER_ERROR_NULL,
    LOGIN_USER_ERROR,
    REGISTER_USER_SUCCESS,
    LOGOUT,
    FORGOT_PASSWORD_ERROR,
    FORGOT_PASSWORD_ERROR_NULL,
    FORGOT_PASSWORD_SUCCESS,
    RESET_PASSWORD_ERROR_NULL,
    RESET_PASSWORD_ERROR,
    RESET_PASSWORD_SUCCESS,
    GET_USER,
} from "../actionType/userType"

const initialState = {
    user: [],
    errorRegestration: "",
    errorLogin: "",
    errorForgotPassword: "",
    errorResetPassword: "",
    login: false,
    register: false,
    forgotPassword: false,
    resetPassword: false,
}

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case REGISTER_USER_ERROR: 
            return {
                ...state,
                errorRegestration: action.payload
            }  
        case REGISTER_USER_ERROR_NULL: 
            return {
                ...state,
                errorRegestration: ""
            } 
        case REGISTER_USER_SUCCESS: 
            return {
                ...state,
                register: !state.register,
            } 
        case SET_USER: 
            return {
                ...state,
                refreshToken: action.refreshToken,
                accessToken: action.accessToken,
                user: action.user,
                errorLogin: "",
                login: true,
            }  
        case LOGIN_USER_ERROR: 
            return {
                ...state,
                errorLogin: action.payload
            }
        case LOGIN_USER_ERROR_NULL: 
            return {
                ...state,
                errorLogin: ""
            }  
        case LOGOUT: 
            return {
                initialState,
            }   
        case FORGOT_PASSWORD_ERROR: 
            return {
                ...state,
                errorForgotPassword: action.payload,
            }   
        case FORGOT_PASSWORD_ERROR_NULL: 
            return {
                ...state,
                errorForgotPassword: "",
            }   
        case FORGOT_PASSWORD_SUCCESS: 
            return {
                ...state,
                forgotPassword: !state.forgotPassword,
            }    

        case RESET_PASSWORD_ERROR: 
            return {
                ...state,
                errorResetPassword: action.payload,
            }   
        case RESET_PASSWORD_ERROR_NULL: 
            return {
                ...state,
                errorResetPassword: "",
            }   
        case RESET_PASSWORD_SUCCESS: 
            return {
                ...state,
                resetPassword: !state.resetPassword,
            }    
        case GET_USER: 
            return {
                ...state,
                user: action.payload,
            }   
        default: {
            return {
                ...state
            }
        }    
    }
}
