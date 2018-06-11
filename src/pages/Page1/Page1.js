import React, {Component} from 'react';

export default class Page1 extends Component {
    constructor(props){
        super(props);
        this.state={
            id:''
        }
    }
    change(e){
            var caret = document.getElementById('input').selectionStart
            //获取当前的value
            var value = e.target.value
            //从左边沿到坐标之间的空格数
            var sp = (value.slice(0, caret).match(/\-/g) || []).length
            //去掉所有空格
            var nospace = value.replace(/\-/g, '')
            //重新插入空格
var curVal = e.target.value = nospace
    .replace(/(.{4})/g, "$1-")
    .trim()
            //从左边沿到原坐标之间的空格数
            var curSp = (curVal.slice(0, caret).match(/\-/g) || []).length
            //修正光标位置
document .getElementById('input').selectionEnd = document.getElementById('input').selectionStart = caret + curSp - sp;
this.setState({
id:curVal
})
    }
    render() {
        return (
            <div>
                <input onChange={(e) => {this.change(e)}} value={this.state.id} id="input"/>
            </div>
        )
    }
}