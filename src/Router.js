import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './screens/Home';
import Contact from './screens/Contact';
import Ask from './screens/Ask';
import Questions from './screens/Questions';
import Login from './screens/Login';
import Account from './screens/Account';

class Router extends Component {
    User(props) {
        return <h1>Hello {props.match.params.username}!</h1>;
      }
    render () {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/contact" component={Contact} exact />
                    <Route path="/questions/ask" component={Ask} exact />
                    <Route path="/login" component={Login} exact />
                    <Route path="/account" component={Account} exact />
                    <Route path="/questions/:username" component={Questions} exact />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;