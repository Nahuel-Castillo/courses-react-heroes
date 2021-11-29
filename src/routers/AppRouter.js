import React, { useContext } from 'react';

import {
    BrowserRouter as Router,
    Switch
  } from 'react-router-dom';
import { AuthContext } from '../auth';
import { LoginScreen } from '../components';
import { PublicRoute, DashboardRoutes, PrivateRoute } from '../routers';

export const AppRouter = () => {

  const { user } = useContext( AuthContext );

  return (
      <Router>
        <div>

          <Switch>
            {/* If the route is login render <LoginScreen/>*/}
            <PublicRoute isAuthenticated={ user?.logged } exact path="/login" component={ LoginScreen } />

            {/* if the route is others render <DashboardRoutes/>*/}
            <PrivateRoute isAuthenticated={ user?.logged } path="/" component={ DashboardRoutes } />

          </Switch>
        </div>
      </Router>
  );
}
