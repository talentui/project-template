import React, { Component } from "react";
import { connect } from "react-redux";
import TodoFilter from "./todo-filter";
import TodoHeader from "./todo-header";
import TodoList from "./todo-list";
import mapActionCreators from "@beisen/talent-ui-helper/lib/utils/mapActionCreators";
import actions from "&/reducers/todos/actions";
import todoCss from "./todos.scss";
import warning from '@beisen/talent-ui-helper/lib/utils/warning';

@connect(state => ({ data: state.todos }), mapActionCreators(actions))
export default class Todos extends Component {
    getVisibleTodoList() {
        let { data: { filter, todos } } = this.props;
        if (filter === "all") return todos;
        return todos.filter(item => {
            if (filter === "finished") {
                return item.finished;
            } else if (filter === "active") {
                return !item.finished;
            }
        });
    }

    render() {
        let { header, todoList, data: {filter}, todoFilter } = this.props;
        return (
            <div className="todos-box">
                <TodoHeader {...header} />
                <TodoFilter {...todoFilter} filterType={filter}/>
                <TodoList {...todoList} todos={this.getVisibleTodoList()} />
                <div className="todo-footer" />
            </div>
        );
    }
}
