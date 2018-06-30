import React, {Component} from 'react';
import Loading from 'component/Loading/Loading.jsx'
export default class Hello extends Component {
         constructor(props){
        super(props);
        this.state={
            count:0
        }
    }
    addCount(){
        this.setState({
            count:this.state.count+1
        })
    }
    render() {
        return (
            <div onClick={()=>this.addCount()}>
                Hello,React
                <p>{this.state.count}</p>
            </div>
        )
    }
}