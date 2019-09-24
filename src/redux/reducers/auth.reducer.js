import { 
    SET_USER_INFO
 } from '../types/auth.types';

 const INITIAL_STATE = {
    user: null,
    token: null,
    isLoggingIn: false
 };

 const auth = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_USER_INFO:
            return {
                ...state,
                isLoggingIn: true,
                user: payload.user,
                token: { token: payload.token, expires: payload.expires }
            }
        default:
            return state;    
    }
 }
 
 export default auth;