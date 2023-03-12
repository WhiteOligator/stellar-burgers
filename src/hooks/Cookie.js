import  Cookies from  'js-cookie';


export const SetCookie = (name, token) => {
    Cookies.set(name, token, {
      expires: 20/1440,
    });
}

export const GetCookie = (name) => {
    return Cookies.get(name)
 };

export const RemoveCookie = (name) => {
    Cookies.remove(name);
 };