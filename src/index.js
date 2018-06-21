import React from 'react';
import ReactDom from 'react-dom';
import Hello from './component/Hello/hello.jsx';
import getRouter from './router/router';
import {Provider} from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import store from './redux/store'
import App from 'component/App/App'
//初始化
renderWithHotReload(App);
//react-hot-loader热更新
if (module.hot) {
module.hot.accept('component/App/App', () => {
    const NextApp = require('component/App/App').default;
    renderWithHotReload(NextApp);
    });
}

function renderWithHotReload(RootElement) {
    ReactDom.render(
        <AppContainer>
<Provider store = {store} > 
    <Router>
            {RootElement}
    </Router>
</Provider>
        </AppContainer>,
        document.getElementById('app')
    )
}