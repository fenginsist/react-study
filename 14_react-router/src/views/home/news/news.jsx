import React, {Component} from "react";


export default class News extends Component {

    state = {
        newsArr: [
            'news001', 'news002', 'news003'
        ]
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.newsArr.map((value, key) => <li key={key}>{value}</li>)}
                </ul>
            </div>
        )
    }
}
