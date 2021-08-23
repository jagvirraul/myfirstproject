import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from '../LoginPage/Login'
import Weather from '../Weather/Weather'
import Home from '../Components/Home';
import dashboard from '../Components/dashboard';

export default function MainRoute() {
    return (
        <div>
            <Router>
                <Home />
                <Switch>
                    <Route exact path="/" component={dashboard} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/weather" component={Weather} />
                </Switch>
            </Router>
        </div>
    )
}

