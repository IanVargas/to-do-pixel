export function getCoockie(){
    const tokenCheck = document.cookie.match('(^|;)\\s*' + 'userToken' + '\\s*=\\s*([^;]+)')?.pop() || ''
    return tokenCheck;
}

export function createCookie(token){
    document.cookie= `userToken=${token}`
}

export function deleteCookie(){
    document.cookie = "userToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}