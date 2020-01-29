react路由网站https://reacttraining.com

安装的包 npm i -S react-router-dom

路由标签
1. <BrowserRouter/ >
2. <HashRouter / >
3. <Router / >
4. <Switch / >
5. <Link/ >或者<NavLink/ >：这个有class属性， link标签没有
6. <Redirect / > 这个可以优先显示哪一个组件

组件属性
this.props中的
1. match : params 向路由组件传递参数使用这个
2. history: push(),replace(),goBack(),goForward
3. location: 还没用到

如何编写路由效果
1、编写路由组件
2、在父路由组件中指定
    路由链接：<NavLink>
    路由： <Route>


使用方法创造组件，传给下面的路由组件会有三个隐藏属性
1、history
2、location
3、match  这里面的 param 会有 上个组件 传过来的 值
