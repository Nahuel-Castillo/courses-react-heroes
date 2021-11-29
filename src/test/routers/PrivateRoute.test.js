import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { PrivateRoute } from "../../routers";

describe('PrivateRoute test', () => {
    
    const props = {
        location: {
            pathname: '/marvel',
            search: 'marvel-spider'
        }
    };

    Storage.prototype.setItem = jest.fn();

    test('should show the component if user is authenticated and save in local storage', () => {
        
        const wrapper = mount( 
            <MemoryRouter> 
                <PrivateRoute isAuthenticated={ true } component={ () => <p>Ready</p> } { ...props }  />
            </MemoryRouter>
        );

        expect( wrapper.find('p').exists() ).toBeTruthy();
        expect( localStorage.setItem ).toHaveBeenCalledWith( 'lastPath', props.location.pathname + props.location.search);
    });

    test('should block component if user is not authenticated', () => {
        const wrapper = mount( 
            <MemoryRouter> 
                <PrivateRoute isAuthenticated={ false } component={ () => <p>Ready</p> } { ...props }  />
            </MemoryRouter>
        );

        expect( wrapper.find('p').exists() ).toBeFalsy();
        expect( localStorage.setItem ).toHaveBeenCalledTimes( 0 );
    });
    
});