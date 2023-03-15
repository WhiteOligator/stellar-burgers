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
    UPDATE_USER,
    UPDATE_ERROR,
    UPDATE_SUCCESS,
    UPDATE_START
} from "../actionType/userType"

const initialState = {
    user: [],
    error: "",
    login: false,
    register: false,
    forgotPassword: false,
    resetPassword: false,
    updateSuccess: false,
    updateStart: false,
}

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case REGISTER_USER_ERROR: 
            return {
                ...state,
                error: action.payload
            }  
        case REGISTER_USER_ERROR_NULL: 
            return {
                ...state,
                error: ""
            } 
        case REGISTER_USER_SUCCESS: 
            return {
                ...state,
                register: !state.register,
            } 
        case SET_USER: 
            return {
                ...state,
                user: action.user,
                error: "",
                login: true,
            }  
        case LOGIN_USER_ERROR: 
            return {
                ...state,
                error: action.payload
            }
        case LOGIN_USER_ERROR_NULL: 
            return {
                ...state,
                error: ""
            }  
        case LOGOUT: 
            return {
                user: [],
                error: "",
                login: false,
                register: false,
                forgotPassword: false,
                resetPassword: false,
                updateSuccess: false,
            }   
        case FORGOT_PASSWORD_ERROR: 
            return {
                ...state,
                error: action.payload,
            }   
        case FORGOT_PASSWORD_ERROR_NULL: 
            return {
                ...state,
                error: "",
            }   
        case FORGOT_PASSWORD_SUCCESS: 
            return {
                ...state,
                forgotPassword: !state.forgotPassword,
            }    

        case RESET_PASSWORD_ERROR: 
            return {
                ...state,
                error: action.payload,
            }   
        case RESET_PASSWORD_ERROR_NULL: 
            return {
                ...state,
                error: "",
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
        case UPDATE_USER: 
            return {
                ...state,
                user: action.payload,
            }  
        case UPDATE_ERROR: 
            return {
                ...state,
                error: action.payload,
                updateStart: false,
            }
        case UPDATE_SUCCESS: 
            return {
                ...state,
                updateSuccess: !state.updateSuccess,
                updateStart: false,
                error: "",
            }   
        case UPDATE_START: 
            return {
                ...state,
                updateStart: true,
            }  
        default: {
            return {
                ...state
            }
        }    
    }
}
