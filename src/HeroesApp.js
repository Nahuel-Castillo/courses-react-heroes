import React, { useEffect, useReducer } from 'react';
import { AuthContext, authReducer } from './auth';
import { AppRouter } from './routers';

const initialState = {
    name:'', 
    logged: false
}

const init = () => { 
    try {
        return JSON.parse( localStorage.getItem('user') ) || initialState; 
    } catch (error) {
        return initialState;
    }
};

export const HeroesApp = () => {

    const [user, dispatch] = useReducer(authReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify( user ) );
    }, [ user ]);

    return (

        <AuthContext.Provider value={ { user, dispatch } }>

            <AppRouter />

        </AuthContext.Provider>

    )
}
