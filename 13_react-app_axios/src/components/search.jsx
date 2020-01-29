import React, {Component} from "react";
// import PropTypes from 'prop-types'
import PubSub from 'pubsub-js'


export default class Search extends Component {

    /*static = {
        handleData: PropTypes.func.isRequired
    }*/

    search = () => {
        // const {handleData} = this.props
        const {value} = this.input
        console.log('值为：' + value)
        if (value) {
            //handleData(value)
            PubSub.publish('search', value)
        }
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input type="text" placeholder="enter the name you search" ref={input => {
                        this.input = input
                    }}/>
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}
