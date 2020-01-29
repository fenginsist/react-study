import React, {Component} from "react";
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import CommentAdd from '../../components/comment-add/comment-add'
import CommentList from '../../components/comment-list/comment-list'

import {addComment, deleteComment, getComments} from '../../redux/action'

class App extends Component {

    static propTypes = {
        comments: PropTypes.array.isRequired,   // 对应 redux 中的 state
        addComment: PropTypes.func.isRequired,
        deleteComment: PropTypes.func.isRequired,
        getComments: PropTypes.func.isRequired
    };

    componentDidMount() {
        // 项目启动，异步获取所有评论数组
        this.props.getComments()
    }

    render() {
        const {comments, addComment, deleteComment} = this.props
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
                        <CommentList comments={comments} deleteComment={deleteComment}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({comments: state.comments}),   // state 就是 reducers 中的所有的值,现在仅是 comments
    {addComment, deleteComment, getComments}    // 这两个方法就是 从 action.js中获取得到的
)(App)
