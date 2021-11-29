import { authReducer } from "../../auth";
import { types } from "../../types";

describe('Auth test', () => {
    
    test('should retun default state', () => {
        
        const state = authReducer();

        expect( state ).toMatchObject( { name: '', logged: false } );
    });

    test('should auth and set user name', () => {
        const state  = authReducer( undefined, { type: types.login, payload: 'userName' } );

        expect( state ).toMatchObject( { name: 'userName', logged: true } );
    });

    test('should delete user name and logge = false', () => {
        const state = authReducer( undefined, { type: types.logout } );

        expect( state ).toMatchObject( { name: '', logged: false } );
    });
});