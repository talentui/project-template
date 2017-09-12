import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TodoHeader extends Component {
    state = {};

    handleKeypressEnter = e => {
        if (e.keyCode === 13 && this.state.value) {
            this.props.add(this.state.value);
            setTimeout(() => {
                this.setState({
                    value: ""
                });
            });
        }
    };

    handleInputChange = e => {
        this.setState({
            value: e.target.value
        });
    };

    render() {
        return (
            <div className="todo-header">
                <input
                    type="text"
                    value={this.state.value || ""}
                    onChange={this.handleInputChange}
                    onKeyDown={this.handleKeypressEnter}
                />
            </div>
        );
    }
}
