import {  decodedToken } from "../utils/decodedToken"
import { getFormLocaleStorage, rmoveFromLocaleStorage, setToLocaleStorage } from "../utils/localeStoratge"


export const storeUserInfo = (accessToken)=>{
    return setToLocaleStorage("accessToken",accessToken)
}

export const getUserInfo = () => {
    const authToken = getFormLocaleStorage("accessToken");
    if (authToken) {
        const decoded = decodedToken(authToken);
        console.log(decoded);
        return decoded;
    } else {
        console.log("No access token found");
    }
};

export const loggedInUser = () => {
    const authToken = getFormLocaleStorage("accessToken");
    if (authToken) {
        return !!authToken; 
    }
    return false; 
};

export const removeUser = ()=>{
    return rmoveFromLocaleStorage("accessToken")
}