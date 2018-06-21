import React,{Component} from 'react';
import Nav from 'component/Nav/Nav';
import getRouter from 'router/router';

export default class App entends Component {
    render(){
        reutrn (
            <div>
            <Nav />
            {getRouter()}
            </div>
        )
    }
}