import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk' // redux 扩展插件，支持redux异步操作
import {composeWithDevTools} from 'redux-devtools-extension' // 使用redux 插件，可以在浏览器上查看

import {counter} from './reducers' // 引入counter组件

// 根据counter函数创建store对象  初始化就会执行
const store = createStore(
    counter,                                    // 这是 counter 方法，传递给
    composeWithDevTools(applyMiddleware(thunk)) // applyMiddleware(thunk)：应用上异步中间件  composeWithDevTools：redux在浏览器上的插件
)  // 内部会第一次调用reducer 函数得到初始 state

console.log(store, store.getState())

export default store
