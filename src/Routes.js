import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { RouteWithLayout } from './components';


import {
    Home as HomeView,
    Pricing as PricingView,
    About as AboutView,
    Contact as ContactView,
    Community as CommunityView,
    NotFound as NotFoundView
} from './views';

// I commented out this below; for later use

// import {
//     Header as HomeLayout
// } from './components';

function Routes() {
    return (
        <Switch>
            <RouteWithLayout
                component={HomeView}
                exact
                // layout={HomeLayout} // we will use it later on the course
                path="/"
            />
            <RouteWithLayout
                component={PricingView}
                // layout={HomeLayout}
                path="/pricing"
            />
            <RouteWithLayout
                component={AboutView}
                // layout={HomeLayout}
                path="/about"
            />
            <RouteWithLayout
                component={ContactView}
                exact
                // layout={HomeLayout}
                path="/contact"
            />
            <RouteWithLayout
                component={CommunityView}
                exact
                // layout={HomeLayout}
                path="/community"
            />
            <RouteWithLayout
                component={NotFoundView}
                exact
                // layout={NotFoundLayout}
                path="/not-found"
            />
            <Redirect to="/not-found" />
        </Switch>
    );
};

export default Routes;