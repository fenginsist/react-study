#需求简介
开发一个自动增加的数，比较简单，这里使用一般开发和redux开发，并进行比较


#项目介绍
1. src-counter1_react： 

    就是一般的项目来开发需求，没有使用别的包
2. src-counter2_react：

    就是使用redux 对需求进行开发，使用redux、prop-types组件
    有问题
    1) redux与react组件的代码耦合度太高 counter.jsx 中redux和jsx代码耦合太多
    2)	编码不够简洁
    
    
3. src-counter3_react-redux: 

    使用react组件来开发redux，组件名：react-redux组件
    
    使用这个组件，会改动较多，会将redux的四个js文件 
    放到一个文件redux里
    
    使用connect方法进行传值，将属性和方法专递给组件中，
    
    原来的index.js,需要进行初始化渲染和订阅监听。
```
const render = ()=>{
    ReactDom.render(
        <App store={store}/>,
        document.getElementById('root')
    )
}
// 初始化渲染
render()
// 注册（订阅）监听，一旦状态发生改变，自动重新渲染
store.subscribe(render)
```

*使用react-redux后，index.js*
```
import {Provider} from 'react-redux'  // react 组件

import App from './containers/app'
import store from './redux/store'  // 引入redux

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)
```
app.jsx，这里使用的是 容器，组件为 Counter（为原来的App组件）
```
import {connect} from 'react-redux' // 连接 redux 和 组件，从redux取，在组件中使用

//import * as actions from '../redux/actions' //获取 js 暴露的所有组件
import {increment, decrement} from '../redux/actions' //获取 js 暴露的所有组件
import Counter from "../components/counter";

export default connect(
    state => ({count: state}),
    {increment: increment, decrement: decrement}
)(Counter)
```
4. src-counter4_redux_async:
    对异步增加这个方法进行了修改，在action中进行添加了异步方法，
    异步方法返回的是方法，同步方法返回的是对象
    
    ui 组件：components，没有变动
    容器组件：containers，仅是APP的容器，改动
