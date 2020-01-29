import React, {Component} from "react";
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Main extends Component {

    /*static propTypes = {
        searchName: PropTypes.string.isRequired
    }*/

    state = {
        initView: true,
        loading: false,
        users: null,
        errorMsg: null
    }

    componentDidMount() {
        // 订阅消息 ：监听
        PubSub.subscribe('search', (msg, searchName) => {  // 指定了新的 searchName，需要请求
            console.log(msg, searchName);
            // 更新状态，请求中
            this.setState({
                initView: false,
                loading: true
            })

            const url = `https://api.github.com/search/users?q=${searchName}`
            axios.get(url)
                .then(response => {
                    const result = response.data
                    console.log(result);

                    const users = result.items.map(item => {
                        return {name: item.login, url: item.html_url, avatarUrl: item.avatar_url}
                    })

                    // 更新状态（成功）
                    this.setState({loading: false, users})
                })
                .catch(error => {
                    // 更新状态（失败）
                    this.setState({loading: false, errorMes: error.message})
                })
        })
    }

    // 被舍弃的方法
    // 当组件接收到新的属性时 回调
    /*componentWillReceiveProps(nextProps, nextContext) { // 指定了新的 searchName，需要请求

        const {searchName} = nextProps
        // 更新状态，请求中
        this.setState({
            initView: false,
            loading: true
        })

        const url = `https://api.github.com/search/users?q=${searchName}`
        axios.get(url)
            .then(response => {
                const result = response.data
                console.log(result);

                const users = result.items.map(item => {
                    return {name: item.login, url: item.html_url, avatarUrl: item.avatar_url}
                })

                // 更新状态（成功）
                this.setState({loading: false, users})
            })
            .catch(error => {
                // 更新状态（失败）
                this.setState({loading: false, errorMes: error.message})
            })
    }*/

    render() {
        const {initView, loading, users, errorMsg} = this.state
        const {searchName} = this.props

        if (initView) {
            return <h2>请输入关键字进行搜索{searchName}</h2>
        } else if (loading) {
            return <h2>正在请求中。。。</h2>
        } else if (errorMsg) {
            return <h2>{errorMsg}</h2>
        } else {
            return (
                <div className="row">
                    {users.map((user, index) => (
                        <div className="card" key={index}>
                            {/*target="_blank": 必须带上 rel 属性，意思是 打开一个新页面*/}
                            <a href={user.url} target="_blank"  rel="noopener noreferrer">
                                <img src={user.avatarUrl} alt={user.avatarUrl} style={{width: 100}}/>
                            </a>
                            <p className="card-text">{user.name}</p>
                        </div>
                    ))}
                </div>
            )
        }
    }
}
