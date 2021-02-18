import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './screens/Home';
import Contact from './screens/Contact';

class Router extends Component {
    render () {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/contact" component={Contact} exact />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;