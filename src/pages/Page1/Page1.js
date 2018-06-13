import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetchPosts} from '../../redux/actions/asyn';

const mapStateToProps=(state)=>{
    return {
        status:state.asyn.beforeSend.status,
        result:state.asyn.fetchResult.result
    }
}
const mapDispatchToProps=(dispatch,ownProps) =>{
    return {
        fetch:()=>dispatch(fetchPosts())
    }
}
class Page1 extends Component {
    constructor(props){
        super(props);
        this.state={
            id:''
        }
    }
  
    render() {
        return (
            <div>
               <div onClick={()=>this.props.fetch()}>点击</div>
               状态：<span>{this.props.status}</span><br/>
               结果：<span>{this.props.result}</span>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Page1)