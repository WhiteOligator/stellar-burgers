import  Cookies from  'js-cookie';


export const SetCookie = (name: string, token: string) => {
    Cookies.set(name, token, {
      expires: 20/1440,
    });
}

export const GetCookie = (name: string): string | undefined => {
    return Cookies.get(name)
 };

export const RemoveCookie = (name: string)=> {
    Cookies.remove(name);
 };