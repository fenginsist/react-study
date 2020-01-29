import React, {Component} from "react";
import PropTypes from 'prop-types'

import * as actions from '../redux/actions'

export default class App extends Component {

    static propTypes ={
        store: PropTypes.object.isRequired
    };

    increment = () => {
        //1. 得到选择增加数量
        const number = this.select.value * 1;
        /*2. 得到原本的 count 状态
        const count = this.state.count + number
          3. 更新状态
        this.setState({count})*/
        //2. 调用 store 的方法 更新状态
        this.props.store.dispatch(actions.increment(number))
    };

    decrement = () => {
        //1. 得到选择增加数量
        const number = this.select.value * 1;
        //2. 调用 store 的方法 更新状态
        this.props.store.dispatch(actions.decrement(number))
    };

    incrementIfOdd = () => {
        //1. 得到选择增加数量
        const number = this.select.value * 1;
        //2. 得到原本的 count 状态
        const count = this.props.store.getState();
        // 判断，满足条件才更新状态
        if (count % 2 === 1) {
            //3. 调用 store 的方法 更新状态
            this.props.store.dispatch(actions.increment(number))  // 这个对象传给的 是 action 参数
        }
    };

    incrementAsync = () => {
        //1. 得到选择增加数量
        const number = this.select.value * 1;
        // 启动延时定时器
        setTimeout(() => {
            //3. 调用 store 的方法 更新状态
            this.props.store.dispatch(actions.increment(number))
        }, 1000)
    };


    render() {
        const count = this.props.store.getState();

        return (
            <div>
                <p>click {count} time</p>
                <div>
                    <select ref={select => this.select = select}>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                    </select>&nbsp;
                    <button onClick={this.increment}>+</button>
                    &nbsp;
                    <button onClick={this.decrement}>-</button>
                    &nbsp;
                    <button onClick={this.incrementIfOdd}>increment if odd</button>
                    &nbsp;
                    <button onClick={this.incrementAsync}>increment async</button>
                    &nbsp;
                </div>
            </div>
        )
    }
}
