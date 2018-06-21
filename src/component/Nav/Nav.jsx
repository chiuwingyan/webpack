import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class Nav extends Component {
    render(){
        reutrn (
            <div>
            <ul>
                <li>
                    <Link to="/">首页1</Link>
                </li>
                <li>
                    <Link to="/page1">Page1</Link>
                </li>
            </ul>
            </div>
        )
    }
}