import React, { Component } from "react";

export default class TodoFilter extends Component {
    handleChangeFilter = type => () => {
        let { filter } = this.props;
        filter(type);
    };

    renderBtnList() {
        let { filterType } = this.props;
        return [
            {
                value: "all",
                text: "全部"
            },
            {
                value: "finished",
                text: "已完成"
            },
            {
                value: "active",
                text: "未完成"
            }
        ].map(item => {
            let className = filterType === item.value ? "active" : "";
            return (
                <li key={item.value}>
                    <a
                        href="javascript:;"
                        className={className}
                        onClick={this.handleChangeFilter(item.value)}
                    >
                        {item.text}
                    </a>
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="todo-filter">
                {this.renderBtnList()}
            </ul>
        );
    }
}
