import React from 'react';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import {Provider} from 'react-redux';
import Home from 'pages/Home/Home';
import Page1 from 'pages/Page1/Page1';
import store from '../redux/store'
const getRouter = () => (
<Provider store = {store} >
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">首页</Link>
                </li>
                <li>
                    <Link to="/page1">Page1</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/page1" component={Page1}/>
            </Switch>
        </div>
    </Router>
</ Provider>
);

export default getRouter;