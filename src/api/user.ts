import { GetCookie, SetCookie } from "../hooks/Cookie"
import { 
    RegisterUser,
    LoginUser,
    Logout,
    ForgotPassword,
    resetPassword,
    UpdateUser,
 } from "../utils/TypesAndIntareface"

export const API_ENDPOINT = 'https://norma.nomoreparties.space/api'

const loginURL = 'auth/login'
const registerURL = 'auth/register'
const logoutURL = 'auth/logout'
const tokenURL = 'auth/token'
const forgotPasswordURL = 'password-reset'
const resetPasswordURL = 'password-reset/reset'
const userURL = 'auth/user'


export const registerUser = (config: RegisterUser) => {  

    const response = fetch(`${API_ENDPOINT}/${registerURL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(config),
    });

    return response
}


export const loginUser = (config: LoginUser) => {  

    const response = fetch(`${API_ENDPOINT}/${loginURL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(config),
    });

    return response
}


export const logout = (config: Logout) => {  

    const response = fetch(`${API_ENDPOINT}/${logoutURL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(config),
    });

    return response
}

export const ResetPassword = (config: resetPassword) => {  

    const response = fetch(`${API_ENDPOINT}/${resetPasswordURL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(config),
    });

    return response
}

export const forgotPassword = (config: ForgotPassword) => {  

    const response = fetch(`${API_ENDPOINT}/${forgotPasswordURL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(config),
    });

    return response
}


export const getUser = () => {  

    return  fetch(`${API_ENDPOINT}/${userURL}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            Authorization: 'Bearer' + GetCookie('accessToken'),
        },
    })
    .then(checkResponse)
}



export const updateUser = (config: UpdateUser) => {  

    return fetch(`${API_ENDPOINT}/${userURL}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            Authorization: 'Bearer' + GetCookie('accessToken'),
        },
        body: JSON.stringify(config),
    })
    .then(checkResponse)
        
}


const checkResponse = (res: Response) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
   }
   
const saveTokens = (refreshToken : string, accessToken: string) => {
    SetCookie('accessToken', accessToken);
    SetCookie('refreshToken', refreshToken);
   }
   
export const refreshTokenRequest = () => {
    return fetch(`${API_ENDPOINT}/auth/token`, {
     method: 'POST',
     headers: {
      'Content-Type': 'application/json;charset=utf-8'
     },
     body: JSON.stringify({
      token: GetCookie('refreshToken')
     })
    })
     .then(checkResponse)
   }
   
export const fetchWithRefresh = async(url: string, options: RequestInit) => {
    try {
     const res = await fetch(url, options);
   
     return await checkResponse(res);
    } catch (err: any) {
     if (err.message === 'jwt expired') {
      const {refreshToken, accessToken} = await refreshTokenRequest();
      saveTokens(refreshToken, accessToken);
      
      options = {
          ...options,
          headers: {
              ...options?.headers,
              authorization: accessToken
          }
      }
   
      const res = await fetch(url, options);
   
      return await checkResponse(res);
     } else {
      return Promise.reject(err);
     }
    }
   }