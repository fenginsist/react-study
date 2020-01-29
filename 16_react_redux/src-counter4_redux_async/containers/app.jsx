import {connect} from 'react-redux' // 连接 redux 和 组件，从redux取，在组件中使用

//import * as actions from '../redux/actions' //获取 js 暴露的所有组件
import {increment, decrement, incrementAsync} from '../redux/actions' //获取 js 暴露的所有组件
import Counter from "../components/counter";

export default connect(
    state => ({count: state}),
    {increment: increment, decrement: decrement, incrementAsync}
)(Counter)
/*
第一个参数：数据类型为回调函数，传一般数据属性
第二个参数：数据类型为对象，传函数属性

increment:第一个,要与声明的 一致，这是属性名
* increment：第二个,要与action里的方法名一致，这是属性值*/
