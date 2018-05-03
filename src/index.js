import React from 'react';
import ReactDom from 'react-dom';
import Hello from './component/Hello/hello.jsx';
import getRouter from './router/router'
import { AppContainer } from 'react-hot-loader';
//初始化
renderWithHotReload(getRouter());
//react-hot-loader热更新
if (module.hot) {
    module.hot.accept('./router/router', () => {
        const getRouter = require('./router/router').default;
        renderWithHotReload(getRouter());
    });
}

// if(module.hot){
//     module.hot.accept();    //这是webpck-dev-server的模块热替换
// }

// ReactDom.render(
//     getRouter(),document.getElementById('app')
// );

function renderWithHotReload(RootElement) {
    ReactDom.render(
        <AppContainer>
            {RootElement}
        </AppContainer>,
        document.getElementById('app')
    )
}