import {createStore} from 'redux'
import {counter} from './reducers'

// 根据counter函数创建store对象  初始化就会执行
const store = createStore(counter)  // 内部会第一次调用reducer 函数得到初始 state
console.log(store, store.getState())

export default store
