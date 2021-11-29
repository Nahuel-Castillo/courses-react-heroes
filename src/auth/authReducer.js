import { types } from "../types";

const initialState = {
    name: '',
    logged: false
}

export const authReducer = ( state = initialState, action ) => {

    switch ( action?.type ) {

        case types.login:
            return {
                name: action.payload,
                logged: true
            }
        
        case types.logout:
            return {
                ...initialState
            }

        default:
            return state;
    }

};