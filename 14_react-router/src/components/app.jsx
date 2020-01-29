import React, {Component} from "react";
import {Switch, Route, Redirect} from "react-router-dom";

import About from '../views/about/about'
import Home from '../views/home/home'
import MyNavLink from "./my-nav-link";

import './app.css'

export default class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header">
                            <h2>React Router Demo</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/*导航路由链接*/}
                            {/*
                               默认样式为 active 的class，为蓝色，
                               想改变，两种方法：
                               1、修改 active 的样式
                               2、添加属性 activeClassName,然后自定义， 这里进行了包装，
                               注意的地方：1、样式有可能 覆盖，2、包装组件时，一定使用扩展运算符 将穿的属性值进行设置
                            */}

                            {/*<NavLink className='list-group-item' to='/about' >About</NavLink>
                            <NavLink className='list-group-item' to='/home' >Home</NavLink>*/}
                            <MyNavLink className="list-group-item" to='/about'>About</MyNavLink>
                            <MyNavLink className="list-group-item" to='/home'>Home</MyNavLink>

                        </div>
                    </div>

                    {/* 右边的部分 */}
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/*可切换的路由组件*/}
                                <Switch>
                                    <Route path='/about' component={About}/>
                                    <Route path='/home' component={Home}/>
                                    <Redirect to='/about'/>
                                </Switch>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
