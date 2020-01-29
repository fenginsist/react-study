#功能：
实现一个评论的表单
    进行增、删、遍历

#数组的方法总结：
以下都是非常常用的方法
map(),是对数组的遍历，
    map(value):value 为数组的值，
    map(value, index):value 为数组的值，index为数组下标
unshift(),添加到数组的最上面，
splice()
    splice(value, 1):删除
    splice(value, 0, value2):替换
    splice(value): 添加

#三个src-xxx描述
1. src-base: 基本的jsx布局

2. src-user： 
    删除item：是父组件将删除的方法传给父组件，再传给孙子组件，
    让孙子组件调用爷爷组件的方法进行删除item
    
    也就是子组件通过调用父组件的方法来改变子组件的数据
3. src:（最好的使用）
    对src-user 进行修改，使用 pubsub-js 方式对数据 进行
    publish/subscribe（发布/订阅） 的传递。
    
