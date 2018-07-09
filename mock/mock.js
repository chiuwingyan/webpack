let Mock = require('mockjs');

let Random = Mock.Random;

//拦截/api/user，返回随机的一个中文名字，一个20个字母的字符串
// Mock.mock('/api/user','get',{
//     'name':'@cname',
//     'intro':'@word(20)'
// })

module.exports=function () {
    var data={};
    data.user={
        'name':Random.cname(),
        'intro':Random.word(20)
    };
    return data;
}