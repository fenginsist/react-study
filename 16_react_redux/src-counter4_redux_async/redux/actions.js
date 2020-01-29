import {INCREMENT, DECREMENT} from '../redux/action-types'
/*
* 包含 所有的 action creator
* 同步的action 都返回一个对象
* 异步的action 返回的是一个函数
* */
// 增加
export const increment = (number) => ({type: INCREMENT, data: number});
// 减少
export const decrement = (number) => ({type: DECREMENT, data: number});

/*
* 异步 action
* 异步操作 一定要在 store.js里 添加中间件 applyMiddleware(thunk) // 应用上异步中间件
* */
export const incrementAsync = (number) => {
    /*异步返回的是函数，同步返回的是对象*/
    return dispatch => {
        // 异步的代码
        setTimeout(() => {
            // 1s 之后采取分发一个增加的 action
            dispatch(increment(number))
        }, 1000)
    }
};
