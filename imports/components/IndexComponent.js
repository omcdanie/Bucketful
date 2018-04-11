import React, {Component} from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';

import Login from './LoginComponent';
import ProfileComponent from '../ui/profile/ProfileView';

export default class Index extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={ProfileComponent} />
                </Switch>
            </BrowserRouter>
        );
    }
}
