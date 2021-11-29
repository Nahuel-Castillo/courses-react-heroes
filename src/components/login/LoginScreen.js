import React, { useContext } from 'react';
import { AuthContext } from '../../auth';
import { types } from '../../types';

export const LoginScreen = ( { history }) => {

    const { dispatch } = useContext( AuthContext );

    const handleLogin = () => {
        
        dispatch( { 
            type: types.login, 
            payload: 'Nahuel' 
        });

        const lastPath = localStorage.getItem('lastPath') || '/';

        history.replace( lastPath );
    };


    return (
        <div className="container mt-5">
            <h2> LoginScreen </h2>
            <hr/>

            <button 
                className="btn btn-primary"
                onClick={ handleLogin }
            >
                Login
            </button>
        </div>
    )
}
