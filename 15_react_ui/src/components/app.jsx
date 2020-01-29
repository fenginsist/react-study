import React, {Component} from "react";
import {Button, Toast} from "antd-mobile";

export default class App extends Component{

    handleClick = ()=>{
        Toast.info('duration', 5)
    }

    render(){
        return (
            <div>
                <h1>1111</h1>
                <Button type='primary' onClick={this.handleClick}>start</Button>
            </div>
        )
    }
}
