import React,{Component} from 'react'

//router按需加载,异步加载的包装组件Bundle。Bundle的主要功能就是接收一个组件异步加载的方法，并返回相应的react组件
class Bundle extends Component{
    constructor(props){
        super(props);
        this.state = {
            mod: null            //module的简写，因为module是关键字
        };
    }
    componentWillMount(){
        this.load(this.props)
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.load!==this.props.load){
            this.load(nextProps)
        }
    }
    load(props){
        this.setState({
            mod:null
        })
        props.load((mod) => {
            this.setState({
                mod:mod.default?mod.default:mod
            })
        })
    }
    render(){
        return this.props.children(this.state.mod)
    }
}
export default Bundle;