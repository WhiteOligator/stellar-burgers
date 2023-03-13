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

export const registerThunk = (config) => {
    return async (dispatch) => {
        try {
            const response = await api.user.registerUser(config)
            if (response.status !== 200) {
                let result = await response.json();
                dispatch(registerUserErorr(result.message))
            } else {
                dispatch(registerUserSuccess())
            }
        } catch (error) {
            dispatch(registerUserErorr(error))
        }
    }
}


export const registerErrorNull = () => {
    return async (dispatch) => {
        dispatch(registerUserErorrNull())
    }
}

export const loginThunk = (config) => {
    return async (dispatch) => {
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
        } catch (error) {
            dispatch(loginUserErorr(error))
        }
    }
}

export const loginErrorNullThunk = () => {
    return async (dispatch) => {
        dispatch(loginUserErorrNull())
    }
}

export const setRegisterThunk = () => {
    return async (dispatch) => {
        dispatch(registerUserSuccess())
    }
}

export const logoutThunk = (config) => {
    return async (dispatch) => {
        const response = await api.user.logout(config);
        let result = await response.json();
        console.log(result)
        if (response.status === 200) {
            dispatch(logout())
            
        } else {
            console.log(response)
        }
    }
}


export const forgotPasswordThunk = (email) => {
    return async (dispatch) => {
        try {

            const response = await api.user.forgotPassword(email)
            if (response.status !== 200) {
                let result = await response.json();
                dispatch(forgotPasswordError(result))
            } else {
                dispatch(forgotPasswordSuccess())
                dispatch(forgotPasswordErrorNull())
            }

        } catch (error) {
            dispatch(forgotPasswordError(error))
        }


    }
}

export const forgotPasswordFalseThunk = () => {
    return async (dispatch) => {
        dispatch(forgotPasswordSuccess())
        dispatch(forgotPasswordErrorNull())
    }
}


export const resetPasswordThunk = (config) => {
    return async (dispatch) => {
        try {

            const response = await api.user.resetPassword(config)
            if (response.status !== 200) {
                let result = await response.json();
                dispatch(resetPasswordError(result))
            } else {
                dispatch(resetPasswordSuccess())
                dispatch(resetPasswordErrorNull())
            }

        } catch (error) {
            dispatch(resetPasswordError(error))
        }


    }
}

export const resetPasswordFalseThunk = () => {
    return async (dispatch) => {
        dispatch(resetPasswordSuccess())
        dispatch(resetPasswordErrorNull())
    }
}


export const getUserThunk = () => {
    return async (dispatch) => {

            fetchWithRefresh(`${API_ENDPOINT}/auth/user`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                    Authorization: 'Bearer' + GetCookie('accessToken'),
                },
            })
       
            const response = await api.user.getUser()

            if (response.status === 200) {
                let result = await response.json();
                
                dispatch(getUserCreators(result.user))
                dispatch(updateUserCreatorsSuccess())
            } 
    }
}

export const updateUserThunk = (config) => {
    return async (dispatch) => {
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

            if (response.status === 200) {
                let result = await response.json();
                dispatch(updateUserCreators(result.user))
                dispatch(updateUserCreatorsSuccess())
               
            } else {
                let result = await response.json();
                dispatch(updateUserCreatorsError(result.message))
            }
        } catch (error) {
            dispatch(updateUserCreatorsError(error))
        }


    }
}

export const updateUserCreatorNull = () => {
    return async (dispatch) => {
        dispatch(updateUserCreatorsSuccess())
    }
}