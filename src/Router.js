import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './screens/Home';
import Contact from './screens/Contact';
import Ask from './screens/Ask';
import Questions from './screens/Questions';
import Login from './screens/Login';
import Register from './screens/Register';
import Account from './screens/Account';
import NotFoundPage from './screens/NotFoundPage';
import Popular from './screens/Popular';

class Router extends Component {
    render () {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/contact" component={Contact} exact />
                    <Route path="/questions/ask" component={Ask} exact />
                    <Route path="/questions/popular" component={Popular} exact />
                    <Route path="/login" component={Login} exact />
                    <Route path="/register" component={Register} exact />
                    <Route path="/account" component={Account} exact />
                    <Route path="/questions/:id" component={Questions} exact />
                    <Route component={NotFoundPage} exact />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;