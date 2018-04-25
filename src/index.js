import React from 'react';
import ReactDom from 'react-dom';
import Hello from './component/Hello/hello.jsx';
import getRouter from './router/router'
if(module.hot){
    module.hot.accept();
}
ReactDom.render(
    getRouter(),document.getElementById('app')
);