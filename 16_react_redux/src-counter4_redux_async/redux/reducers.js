/*
* 包含 n  个reducer 函数的模块
* 根据老的 state 和 指定 action，处理返回一个新的state
* */
import {INCREMENT, DECREMENT} from './action-types'

export function counter(state = 0, action) {/*state 就是 counter 值*/
    console.log('counter', state, action);
    switch (action.type) {
        case INCREMENT:
            return state + action.data;
        case DECREMENT:
            return state - action.data;
        default:
            return state
    }
}

