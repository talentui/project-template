import React, { Component } from "react";

export default class TodoList extends Component {
    hanleToggleTodo = id => () => {
        let { toggle } = this.props;
        toggle(id);
    };

    handleRemoveTodo = id => (e) => {
        e.stopPropagation();
        let { remove } = this.props;
        remove(id);
    };

    render() {
        let { todo } = this.props;
        return (
            <li className="todo-item" onClick={this.hanleToggleTodo(todo.id)}>
                <input type="checkbox" checked={todo.finished} readOnly />
                {todo.text}
                <a
                    href="javascript:;"
                    className="btn-remove"
                    onClick={this.handleRemoveTodo(todo.id)}
                >
                    X
                </a>
            </li>
        );
    }
}
