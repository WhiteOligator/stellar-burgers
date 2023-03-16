import { GetCookie, SetCookie } from "../hooks/Cookie"

export const API_ENDPOINT = 'https://norma.nomoreparties.space/api'

const loginURL = 'auth/login'
const registerURL = 'auth/register'
const logoutURL = 'auth/logout'
const tokenURL = 'auth/token'
const forgotPasswordURL = 'password-reset'
const resetPasswordURL = 'password-reset/reset'
const userURL = 'auth/user'

export const registerUser = (config) => {  

    const response = fetch(`${API_ENDPOINT}/${registerURL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(config),
    });

    return response
}


export const loginUser = (config) => {  

    const response = fetch(`${API_ENDPOINT}/${loginURL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(config),
    });

    return response
}

export const updateToken = (config) => {  

    const response = fetch(`${API_ENDPOINT}/${tokenURL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(config),
    });

    return response
}

export const logout = (config) => {  

    const response = fetch(`${API_ENDPOINT}/${logoutURL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(config),
    });

    return response
}

export const ResetPassword = (config) => {  

    const response = fetch(`${API_ENDPOINT}/${resetPasswordURL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(config),
    });

    return response
}

export const forgotPassword = (config) => {  

    const response = fetch(`${API_ENDPOINT}/${forgotPasswordURL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(config),
    });

    return response
}

export const resetPassword = (config) => {  

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



export const updateUser = (config) => {  

    const response = fetch(`${API_ENDPOINT}/${userURL}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
            Authorization: 'Bearer' + GetCookie('accessToken'),
        },
        body: JSON.stringify(config),
    })
        

    return response
}


const checkResponse = (res) => {
    return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
   }
   
const saveTokens = (refreshToken, accessToken) => {
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
   
export const fetchWithRefresh = async(url, options) => {
    try {
     const res = await fetch(url, options);
   
     return await checkResponse(res);
    } catch (err) {
     if (err.message === 'jwt expired') {
      const {refreshToken, accessToken} = await refreshTokenRequest();
      saveTokens(refreshToken, accessToken);
   
      options.headers.authorization = accessToken;
   
      const res = await fetch(url, options);
   
      return await checkResponse(res);
     } else {
      return Promise.reject(err);
     }
    }
   }