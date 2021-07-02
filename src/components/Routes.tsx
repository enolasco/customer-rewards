import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';
import { CustomerRewards } from './CustomerRewards/CustomerRewards';
import { CustomersList } from './Customers/CustomersList';

export const Routes = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/rewards/:id" component={CustomerRewards}/>
                    <Route exact path="/" component={CustomersList}/>
                    <Redirect to="/"/>
                </Switch>
            </Router>
        </div>
    )
}
