import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './screens/Home';
import Contact from './screens/Contact';
import PostCreate from './screens/PostCreate';
import Posts from './screens/Posts';
import Contest from './screens/Contest';
import Login from './screens/Login';
import Register from './screens/Register';
import Account from './screens/Account';
import NotFoundPage from './screens/NotFoundPage';
import Search from './screens/Search';
import Users from './screens/Users';
import Notifications from './screens/Notifications';

class Router extends Component {
    render () {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/contact" component={Contact} exact />
                    <Route path="/post/create" component={PostCreate} exact />
                    <Route path="/login" component={Login} exact />
                    <Route path="/register" component={Register} exact />
                    <Route path="/account" component={Account} exact />
                    <Route path="/Search" component={Search} exact />
                    <Route path="/notifications" component={Notifications} exact />
                    <Route path="/users/:username" component={Users} exact />
                    <Route path="/posts/:id" component={Posts} exact />
                    <Route path="/contests/:id" component={Contest} exact />
                    <Route component={NotFoundPage} exact />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;