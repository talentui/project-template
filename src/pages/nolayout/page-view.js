import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../reducers/home/actions";
import { bindActionCreators } from "redux";
import "./home.scss";
import { Link } from "react-router-dom";

@connect(
    state => {
        return {
            data: state.home
        };
    },
    dispatch => {
        return bindActionCreators(actions, dispatch);
    }
)
export default class Home extends Component {

    static useLayout = false;

    componentDidMount() {
        this.counter = setInterval(() => {
            let { increase } = this.props;
            increase();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.counter);
    }

    render() {
        
        let { data } = this.props;
        return (
            <div className="home-page">
                <div>
                    <div> 你是否看到了时间的流失：{data} </div>
                    <Link to="/home">回到首页</Link>
                </div>
            </div>
        );
    }
}
