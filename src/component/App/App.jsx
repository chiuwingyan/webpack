import React,{Component} from 'react';
import Nav from 'component/Nav/Nav.jsx';
import getRouter from '../../router/router';
import {BrowserRouter as Router} from 'react-router-dom';
import {hot} from 'react-hot-loader'
class App extends Component {
     constructor(props){
        super(props);
        
    }
    render(){
        return (
            <div>
            <Nav />
          {getRouter()}
            </div>
        )
    }
}

export default hot(module)(App)