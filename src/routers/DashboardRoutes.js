import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { DcScreen, HeroScreen, MarvelScreen, SearchScreen, Navbar } from '../components';

export const DashboardRoutes = () => {

    return (
        <>
            <Navbar />  

            <div className="container mt-4">
                <Switch>
                    <Route exact path="/marvel" component={ MarvelScreen }/>
                    <Route exact path="/hero/:heroId" component={ HeroScreen }/>
                    <Route exact path="/dc" component={ DcScreen }/>
                    <Route exact path="/search" component={ SearchScreen }/>
                    <Redirect to="/marvel" component={ MarvelScreen }/>
                </Switch>
            </div>
        </>
    )
}
