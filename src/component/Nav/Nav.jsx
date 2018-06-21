import React,{Component} from 'react';


export default class Nav entends Component {
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