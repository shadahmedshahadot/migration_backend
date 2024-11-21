export const setToLocaleStorage = (key,token)=>{
    if(!key || typeof window === 'undefined'){
        return ""
    }
    return localStorage.setItem(key,token)
}

export const getFormLocaleStorage = (key)=>{
    if(!key || typeof window === 'undefined'){
        return ""
    }
    return localStorage.getItem(key)
}

export const rmoveFromLocaleStorage = (key)=>{
    if(!key || typeof window === 'undefined'){
        return ""
    }
    return localStorage.removeItem(key)
}