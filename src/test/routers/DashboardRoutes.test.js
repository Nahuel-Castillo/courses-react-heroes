import { mount } from "enzyme";
import { MemoryRouter } from "react-router";
import { AuthContext } from "../../auth";
import { DashboardRoutes } from "../../routers";


describe('Name of the group', () => {
    const context = {
        dispatch: jest.fn(),
        user: {
            name: 'Nahuel',
            logged:true
        }
    }

    test('should show correctly', () => {
        
        const wrapper = mount( 
            <AuthContext.Provider value={ context }>
                <MemoryRouter>
                    <DashboardRoutes/>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( wrapper ).toMatchSnapshot();
  
    });
    
});