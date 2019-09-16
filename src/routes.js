import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './modules/login/Login';
import Home from './modules/home/Home';
import Profile from './modules/profile/Profile';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';

const ProtectedRoute = ({ component: Comp, path, ...rest }) => {
    const loggedIn = localStorage.getItem('loginToken');
    return (
        <Route
            exact
            path={path}
            {...rest}
            render={props => {
                return loggedIn != null ? (
                    <Comp {...props} />
                ) :
                    (
                        <Redirect
                            to={{
                                pathname: "/",
                            }}
                        />
                    );
            }}
        />
    );
};

const LoginLayout = ({ children }) => (
    <div>
        {children}
    </div>
);

const LoginLayoutRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={matchProps => (
            <LoginLayout>
                <Component {...matchProps} />
            </LoginLayout>
        )} />
    )
};
const AppLayout = ({ children }) => (
    <div>
        <Header />
        <div className="d-flex">
            <Sidebar />
            {children}
        </div>
    </div>
);

const AppLayoutRoute = ({ component: Component, path: path, ...rest }) => {
    return (
        <Route {...rest} render={matchProps => (
            <AppLayout>
                <ProtectedRoute path={path} component={Component} {...matchProps}/>
            </AppLayout>
        )} />
    )
};

class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    {/* Initial routing to login page */}
                    <Route exact path="/">
                        <Redirect to="/login" />
                    </Route>
                    {/* 2 different layouts for handling the sidebar and header */}
                    <LoginLayoutRoute path="/login" component={Login} />
                    <AppLayoutRoute path="/home" component={Home} />
                    <AppLayoutRoute path="/profile" component={Profile} />
                    {/* Invalid URL navigates to Login */}
                    <Route render={() => <Redirect to={{ pathname: "/" }} />} />
                    {/* Can create a not found page for invalid urls */}
                    {/* <Route path='*' component={NotFound}/> */}
                </Switch>
            </Router >
        );
    }
}

export default Routes;
// Notes of parameters like rest render matchprops inside router:
// The rest parameter will contain every prop passed to LoginLayoutRoute except component so it allows us to forward them on to the underlying Route component as usual.
// Providing a render prop to the Route we can control where the component prop is rendered. In this case we wrap it in AppLayout component as a children. The matchProps are what usually get passed to a component rendered by Route.
