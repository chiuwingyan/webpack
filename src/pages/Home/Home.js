import React, {Component} from 'react';
import { connect } from 'react-redux';
import {increment} from '../../redux/actions/counter'

const mapStateToProps=(state)=>{
    return {
        counter:state.counter.count
    }
}
const mapDispatchToProps=(dispatch,ownProps) =>{
    return {
        increment:()=>dispatch(increment())
    }
}
class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            count:0
        }
        }
        render() {
            return (
                <div>
                    this is home<br/>
                    当前计数：{this.props.counter}<br/>
                    <button onClick={()=>this.props.increment()}>自增</button>
                </div>
            )
        }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)