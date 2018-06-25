import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Hello from 'component/Hello/hello.jsx';
import Loading from 'component/Loading/Loading.jsx'
export default class Nav extends Component {
    constructor(props){
        super(props);
        
    }
    render(){
        return (
            <div>
            <ul>
                <li>
                    <Link to="/">首页1</Link>
                </li>
                <li>
                    <Link to="/page1">Page1</Link>
                </li>
<Hello />
            </ul>
            </div>
        )
    }
}