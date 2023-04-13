import { api } from '../../api'
import {
    loginUserErorr,
    loginUserErorrNull,
    registerUserErorr,
    registerUserErorrNull,
    setUser,
    registerUserSuccess,
    logout,
    forgotPasswordError,
    forgotPasswordErrorNull,
    forgotPasswordSuccess,
    resetPasswordError,
    resetPasswordSuccess,
    resetPasswordErrorNull,
    getUserCreators,
    updateUserCreators,
    updateUserCreatorsError,
    updateUserCreatorsSuccess,
    updateUserCreatorsStart,
} from '../actionCreators/userCreators'
import { SetCookie, GetCookie } from '../../hooks/Cookie';
import { checkResponse } from '../../utils/Response';
import { fetchWithRefresh } from '../../api/user';
import { API_ENDPOINT } from '../../api/user';
import { AppDispatch, AppThunk   } from "../store";

export const registerThunk: AppThunk = (config) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await api.user.registerUser(config)
            if (response.status !== 200) {
                let result = await response.json();
                dispatch(registerUserErorr(result.message))
            } else {
                dispatch(registerUserSuccess())
            }
        } catch (error: any) {
            dispatch(registerUserErorr(error))
        }
    }
}


export const registerErrorNull: AppThunk = () => {
    return async (dispatch: AppDispatch) => {
        dispatch(registerUserErorrNull())
    }
}

export const loginThunk: AppThunk = (config) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await api.user.loginUser(config)
           
            if (response.status === 200) {
                let result = await response.json();

                let number = result.accessToken.indexOf(' ')

                SetCookie('accessToken', result.accessToken.slice(number))
                SetCookie('refreshToken', result.refreshToken)
               
                dispatch(setUser(result.user))
            } else {
                let result = await response.json();
                dispatch(loginUserErorr(result.message))
            }
        } catch (error: any) {
            dispatch(loginUserErorr(error))
        }
    }
}

export const loginErrorNullThunk: AppThunk = () => {
    return async (dispatch: AppDispatch) => {
        dispatch(loginUserErorrNull())
    }
}

export const setRegisterThunk: AppThunk = () => {
    return async (dispatch: AppDispatch) => {
        dispatch(registerUserSuccess())
    }
}

export const logoutThunk: AppThunk = (config) => {
    return async (dispatch: AppDispatch) => {
        const response = await api.user.logout(config);
        let result = await response.json();
        if (response.status === 200) {
            dispatch(logout())
            
        } else {
            console.log(response)
        }
    }
}


export const forgotPasswordThunk: AppThunk = (email) => {
    return async (dispatch: AppDispatch) => {
        try {

            const response = await api.user.forgotPassword(email)
            if (response.status !== 200) {
                let result = await response.json();
                dispatch(forgotPasswordError(result))
            } else {
                dispatch(forgotPasswordSuccess())
                dispatch(forgotPasswordErrorNull())
            }

        } catch (error: any) {
            dispatch(forgotPasswordError(error))
        }


    }
}

export const forgotPasswordFalseThunk: AppThunk = () => {
    return async (dispatch: AppDispatch) => {
        dispatch(forgotPasswordSuccess())
        dispatch(forgotPasswordErrorNull())
    }
}


export const resetPasswordThunk: AppThunk = (config) => {
    return async (dispatch: AppDispatch) => {
        try {

            const response = await api.user.ResetPassword(config)
            if (response.status !== 200) {
                let result = await response.json();
                dispatch(resetPasswordError(result))
            } else {
                dispatch(resetPasswordSuccess())
                dispatch(resetPasswordErrorNull())
            }

        } catch (error: any) {
            dispatch(resetPasswordError(error))
        }


    }
}

export const resetPasswordFalseThunk: AppThunk = () => {
    return async (dispatch: AppDispatch) => {
        dispatch(resetPasswordSuccess())
        dispatch(resetPasswordErrorNull())
    }
}


export const getUserThunk: AppThunk = () => {
    return async (dispatch: AppDispatch) => {

            fetchWithRefresh(`${API_ENDPOINT}/auth/user`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                    Authorization: 'Bearer' + GetCookie('accessToken'),
                },
            })
       
            const response = await api.user.getUser()
        
            if (response.success) {
                dispatch(getUserCreators(response.user))
                dispatch(updateUserCreatorsSuccess())
            } 
    }
}

export const updateUserThunk: AppThunk = (config) => {
    return async (dispatch: AppDispatch) => {
        try {
            dispatch(updateUserCreatorsStart())

            fetchWithRefresh(`${API_ENDPOINT}/auth/user`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                    Authorization: 'Bearer' + GetCookie('accessToken'),
                },
                body: JSON.stringify(config),
            })
           

            const response = await api.user.updateUser(config)
          
            if (response.success) {
                dispatch(updateUserCreators(response.user))
                dispatch(updateUserCreatorsSuccess())
               
            } else {
                dispatch(updateUserCreatorsError(response.message))
            }
        } catch (error: any) {
            dispatch(updateUserCreatorsError(error))
        }


    }
}

export const updateUserCreatorNull: AppThunk = () => {
    return async (dispatch: AppDispatch) => {
        dispatch(updateUserCreatorsSuccess())
    }
}