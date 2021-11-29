import { mount } from "enzyme";
import { AuthContext } from "../../auth";
import { AppRouter } from "../../routers";

describe('AppRouter test', () => {

    const context = {
        dispatch: jest.fn(),
        user: {
            logged:false
        }
    }
    
    test('should show login if user is no authenticated', () => {
        
        const wrapper = mount( 
            <AuthContext.Provider value={ context }>
                <AppRouter/>
            </AuthContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();
    });

    test('should show the component <Marvel/> if is authenticated', () => {
        context.user = { name: 'Nahue', logged: true };

        const wrapper = mount( 
            <AuthContext.Provider value={ context }>
                <AppRouter/>
            </AuthContext.Provider>
        );

        expect( wrapper.find('.navbar').exists() ).toBeTruthy();

    });
});