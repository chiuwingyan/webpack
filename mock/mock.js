import Mock from 'mockjs';

let Random = Mock.Random;

//拦截/api/user，返回随机的一个中文名字，一个20个字母的字符串
Mock.mock('/api/user','get',{
    'name':'@cname',
    'intro':'@word(20)'
})