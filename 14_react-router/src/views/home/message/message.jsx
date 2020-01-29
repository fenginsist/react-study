import React, {Component} from "react";
import {Route} from 'react-router-dom'

import MessageDetail from './message-detail'
import MyNavLink from "../../../components/my-nav-link";

export default class Message extends Component {
    state = {
        messages: []
    }

    componentDidMount() {
        // 模拟发送 ajax 请求异步获取数据
        setTimeout(() => {
            const messages = [
                {id: 1, title: 'message001'},
                {id: 2, title: 'message002'},
                {id: 3, title: 'message003'},
                {id: 4, title: 'message004'}
            ]
            // 更新状态
            this.setState({messages})
        }, 1000)
    }

    /**
     * 以下两个 路由的
     **/
    showDetail = (id)=>{
        this.props.history.push(`/home/message/messagedetail/${id}`)
    }

    showDetail2 = (id)=>{
        this.props.history.replace(`/home/message/messagedetail/${id}`)
    }

    /**
     * 两种跳转路由的方式
     * 路由默认使用push
     * 这里演示使用按钮进行跳转，不仅可以使用标签进行挑战
     **/
    back = ()=>{
        this.props.history.goBack()
    }

    forward = ()=>{
        this.props.history.goForward()
    }

    /**
     * 通过 js 进行页面跳转 （发请求），路由跳转 不发请求
     **/
    reqPage = ()=>{
        //
        window.location = 'http://www.baidu.com'
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.messages.map((value, key) => (
                        <li key={key}>
                            {/* a标签发的是请求，  link 发的是路由 转发*/}
                            {/*<a href={`/home/message/messagedetail/${value.id}`}>{value.title}</a>*/}
                            <MyNavLink to={`/home/message/messagedetail/${value.id}`} >{value.title}</MyNavLink>
                            &nbsp;&nbsp;<button onClick={()=>{this.showDetail(value.id)}}>push()查看</button>
                            &nbsp;&nbsp;<button onClick={()=>{this.showDetail2(value.id)}}>replace()查看</button>
                        </li>
                    ))}
                </ul>
                <p>
                    <button onClick={this.back}>回退</button>
                    <button onClick={this.forward}>前进</button>
                </p>

                <p>
                    <button onClick={this.reqPage}>页面跳转</button>
                </p>

                {/*下面的模块*/}
                <div>
                    <Route path={`/home/message/messagedetail/:id`} component={MessageDetail}/>
                </div>
            </div>
        )
    }
}
