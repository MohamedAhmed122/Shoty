
import {SET_CURRENT_USER} from './User-type'

export const setCurrentUser =(user)=>({
    type: SET_CURRENT_USER,
    payload: user
})