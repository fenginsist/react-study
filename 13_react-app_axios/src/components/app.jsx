import React, {Component} from "react";

import Search from "./search";
import Main from "./main";

export default class App extends Component {

    /*state = {
        searchName: ''
    }*/

    /*handleData = (searchName) => {
        this.setState({searchName})
    }*/

    render() {
        // const handleData = this.handleData
        // const {searchName} = this.state
        return (
            <div className="container">
                <Search/>
                <Main />
            </div>
        )
    }
}
