import React, {Component} from "react";
import PubSub from 'pubsub-js'

import CommentAdd from '../comment-add/Comment-add'
import CommentList from '../comment-list/Comment-list'

export default class App extends Component {
    /*constructor(prop){
        super(prop)
        this.state={
            comments: [
                {username: 'Tom', content: 'React 挺好的！'},
                {username: 'Jack', content: 'React 挺简单的！'}
            ]
        }
    }*/
    // 给组件对象指定 state 属性
    state = {
        /*comments: [
            {username: 'Tom', content: 'React 挺好的！'},
            {username: 'Jack', content: 'React 挺简单的！'}
        ]*/
        comments: []
    }

    componentDidMount() {

        // 模拟发送异步ajax 请求，获取数据
        setTimeout(() => {
            const comments = [
                {username: 'Tom', content: 'React 挺好的！'},
                {username: 'Jack', content: 'React 挺简单的！'}
            ]
            // 更新状态
            this.setState({comments})
        }, 1000)

        // 订阅消息（deleteComment）
        PubSub.subscribe('deleteComment', (msg, index) => {
            this.deleteComment(index)
        })
    }

    addComment = (comment) => {
        console.log('comment:::' + comment.target);  // undefined
        console.log('comment:::' + comment);
        const {comments} = this.state
        comments.unshift(comment)
        // 更新状态
        this.setState(comments)
    }

    deleteComment = (index) => {
        const {comments} = this.state
        comments.splice(index, 1)  // splice()  可以 进行 增加、删除、修改
        // 更新状态
        this.setState(comments)
    }

    render() {
        const {comments} = this.state
        const addComment = this.addComment
        return (
            <div>
                <div>
                    <header className="site-header jumbotron">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12">
                                    <h1>请发表对 React 的评论</h1>
                                </div>
                            </div>
                        </div>
                    </header>

                    <div className="container">
                        <CommentAdd addComment={addComment}/>
                        <CommentList comments={comments}/>
                    </div>
                </div>
            </div>
        )
    }
}
