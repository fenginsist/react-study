import React from "react";
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'  // react 组件

import App from './containers/app' // 引入APP 容器
import store from './redux/store'  // 引入redux

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)
