/*
*   包含了所有的 action creator （action的工厂函数）
* */
import {ADD_COMMENT, DELETE_COMMENT, RECEIVE_COMMENTS} from './action-types'

/*
* 这里的名字 要与 app.jsx 中下面的名字一致
* */
// 同步添加
export const addComment = (comment) => ({type: ADD_COMMENT, data: comment});

// 同步删除
export const deleteComment = (index) => ({type: DELETE_COMMENT, data: index});

// 同步接收 comments
export const receiveComments = (comments) => ({type: RECEIVE_COMMENTS, data: comments})

// 异步从后台获取数据
export const getComments = () => {
    return dispatch => {
        // 模拟发送 ajax 请求异步获取数据
        setTimeout(() => {
            const comments = [
                {username: 'Tom', content: 'React 挺好的！'},
                {username: 'Jack', content: 'React 挺简单的！'}
            ];
            // 分发一份同步的 action
            dispatch(receiveComments(comments))
        }, 1000)
    }
}
