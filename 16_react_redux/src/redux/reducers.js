/*
* 包含 n 个 reducer 函数（根据老的 state 和action 返回一个新的state）
* */
import {combineReducers} from 'redux'

import {ADD_COMMENT, DELETE_COMMENT, RECEIVE_COMMENTS} from './action-types'


const initComments = [];

// state 要有初始值，也就是react的state，放到了这里
function comments(state = initComments, action) {  // 这个action 也就是自动调用的action.js里面的对象
    switch (action.type) {
        case ADD_COMMENT:
            return [action.data, ...state];
        case DELETE_COMMENT:
            return state.filter((comment, index) => {
                return (index !== action.data)
            });
        case RECEIVE_COMMENTS:
            return action.data;  // 直接返回即可
        default:
            return state;
    }
}

/*
* 当 reducers.js 中有多个函数时
* */
export default combineReducers({
    comments,  // 指定 reducer 对应的属性
})

// redux 向外暴露的是个什么结构？
// { counter: 2, comments: []}
