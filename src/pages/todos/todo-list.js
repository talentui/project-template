import React, { Component } from "react";
import TodoItem from "./todo-item";

export default class TodoList extends Component {
    renderTodoItems() {
        let { toggle, edit, remove } = this.props;
        let { todos } = this.props;
        if(!todos.length) return <div className='no-item-tip'>没有待办</div>
        return todos.map(item => {
            return (
                <TodoItem
                    key={item.id}
                    toggle={toggle}
                    edit={edit}
                    remove={remove}
                    todo={item}
                />
            );
        });
    }

    render() {
        return (
            <ul className="todo-list">
                {this.renderTodoItems()}
            </ul>
        );
    }
}
