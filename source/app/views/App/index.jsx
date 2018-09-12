import React, { Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import ScrollToTopRoute from '../../lib/ScrollToTopRoute';
import NotFound from 'views/NotFound';
import Shows from 'views/Shows';
import ShowDetails from 'views/ShowDetails';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className='App'>
                    <Switch>
                        <ScrollToTopRoute exact path={ '/' } component={ Shows } />
                        <ScrollToTopRoute exact path={ '/:showId' } component={ ShowDetails } />
                        <ScrollToTopRoute path='*' component={ NotFound } />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}
