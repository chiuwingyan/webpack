import React,{Component} from 'react';
import Nav from 'component/Nav/Nav.jsx';
import getRouter from '../../router/router';
import {BrowserRouter as Router} from 'react-router-dom';
import {hot} from 'react-hot-loader'
export default class App extends Component {
     constructor(props){
        super(props);
        
    }
    
    render(){
        return (
            <div>
                hello world!<br/>
            <Nav />
          {getRouter()}
            </div>
        )
    }
}

