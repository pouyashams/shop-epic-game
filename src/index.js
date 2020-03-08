import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch, Redirect, Router} from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createBrowserHistory} from "history";

const history = createBrowserHistory();


ReactDOM.render(
    <div>
        <Router history={history}>
            <Switch>
                <Route path="/" component={App}/>
                <Redirect to="/"/>
            </Switch>
        </Router>
    </div>
    , document.getElementById('root'));

serviceWorker.unregister();
