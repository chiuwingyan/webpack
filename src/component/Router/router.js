import React, {Component} from 'react';
import Bundle from './Bundle';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from 'bundle-loader?lazy&name=home!pages/Home/Home';
import Page1 from 'bundle-loader?lazy&name=page1!pages/Page1/Page1';
import NotFound from 'bundle-loader?lazy&name=NotFound!pages/NotFound/NotFound'
import store from '../../redux/store';
import Loading from 'component/Loading/Loading.jsx'
import Hello from 'bundle-loader?lazy&name=Hello!component/Hello/hello.jsx'
const createComponent=(component)=>(props)=>(
    <Bundle load={component}>
        {
            (Component) => Component ? <Component {...props}/> : <Loading />
        }
    </Bundle>
)
export default class GetRouter extends Component {
     constructor(props){
        super(props);
        
    }
    render(){
        return(
        <div>
            <Switch>
                    <Route exact path="/" component={createComponent(Home)}/>
                    <Route path="/page1" component={createComponent(Page1)}/>
                    <Route path="/hello" component={createComponent(Hello)}/>
                    <Route component = {createComponent(NotFound)} />
            </Switch>
        </div>
        )
    }
}

// if(module.hot){

// }
