import React from 'react';
import Bundle from './Bundle';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import {Provider} from 'react-redux';
import Home from 'bundle-loader?lazy&name=home!pages/Home/Home';
import Page1 from 'bundle-loader?lazy&name=page1!pages/Page1/Page1';
import store from '../redux/store';
import Loading from 'components/Loading/Loading'
const createComponent=(component)=>(props)=>(
    <Bundle load={component}>
        {
            (Component) => Component ? <Component {...props}/> : <Loading />
        }
    </Bundle>
)
const getRouter = () => (
<Provider store = {store} >
    <Router>
        <div>
            <Switch>
                    <Route exact path="/" component={createComponent(Home)}/>
                    <Route path="/page1" component={createComponent(Page1)}/>
            </Switch>
        </div>
    </Router>
</ Provider>
);

export default getRouter;