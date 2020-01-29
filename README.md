1、babel.min.js : 将ES6转为 ES5语法。 解析JSX语法代码为纯JS 语法代码的库
2、react.js ： React 的核心库
3、react-dom.js : 提供操作DOM 的react 扩展库

1. jsx语法
2. 组件定义的两种方式：类和方法
3. 组件三大属性：state、props、ref（这个为标签属性）
4. 组件的组合
5. 标签的受控组件和非受控组件
6. react的生命周期
7. react应用（基于create-react-app脚手架）
8. react-axios
9. react-router
10. react-UI：antdesign


使用的数组方法，总结一下：
1. map()遍历数组
```js
/**
* 功能：动态展示列表数据
*
* 问题：如何将一个数据的数组 转换为 一个标签的数组   很常用
*      使用数组的map() 方法 和 箭头函数
* */
const names = ['jQuery', 'zepto', 'angular', 'react', 'vue']
 // 1、创建虚拟DOM
 // li 标签一定要带 key属性，而且还不能一样 否则警告
 const ul = (
     <ul>
         {names.map(name=> <li key={name}>{name}</li>)}
     </ul>
 )
```
2. unshift()在数组的头部添加新值
3. splice()
    splice(value, 1):删除
    splice(value, 0, value2):替换
    splice(value): 添加
4. filter()
过滤数组，将下标不等于0的过滤掉，返回一个新的数组。
```js
const initComments = [
                {username: 'Tom', content: 'React 挺好的！'},
                {username: 'Jack', content: 'React 挺简单的！'}
            ];
state.filter((comment, index) => {
    return (index !== 0)
});
```