import React from "react";

const allMessages = [
    {id: 1, title: 'message001', content: '我爱你， 中国'},
    {id: 2, title: 'message002', content: '我爱你， 老婆'},
    {id: 3, title: 'message003', content: '我爱你， 孩子'},
    {id: 4, title: 'message004', content: '我爱你， 父母'}
]


export default function MessageDetail(props) {

    console.log('-----'+props)
    /**
     * 这里使用方法创造组件，传给下面的路由组件会有三个隐藏属性
     * 1、history
     * 2、location
     * 3、match  这里面的 param 会有 上个组件 传过来的 值
     */
    const id = props.match.params.id
    //debugger

    // 查询得到对应的 message
    // 返回第一个结果为true 的数组元素  *1: 因为传过来的值为 字符串
    const message = allMessages.find(m => m.id === id*1)

    return (
        <ul>
            <li>Id: {message.id}</li>
            <li>TITLE: {message.title}</li>
            <li>CONTENT: {message.content}</li>
        </ul>
    )
}
