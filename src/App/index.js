import React from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from '../LoginPage/App'
export default function Index () {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/">
                        <App/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

