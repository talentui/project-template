import * as React from "react";
import * as ReactRedux from "react-redux";
import TodoList from "./todo-list";
import TodoHeader from './todo-header';
import TodoFooter from './todo-footer';
import {bindActionCreators} from 'redux';
import './ts-todos.scss';
const { connect } = ReactRedux;
import {
    ITodoState,
    ITodoHanler
} from "&/interfaces/i-todos";
import * as actions from "&/reducers/ts-todos/actions";

class TSTodos extends React.Component<
    ITodoState & ITodoHanler,
    {}
> {
    render() {
        let { todos, onDelete, onEdit, onAdd, onFilter, onToggleTodo } = this.props;
        return (
            <div className="todos-box">
                <TodoHeader onAdd={onAdd} />
                <TodoList todos={todos} onDelete={onDelete} onEdit={onEdit} onToggleTodo={onToggleTodo} />
                <TodoFooter onFilter={onFilter} />
            </div>
        );
    }
}

export default connect<ITodoState, ITodoHanler, {}>(
    state => {
        let { tsTodos: { todos, filter } } = state;
        return {
            todos,
            filter
        };
    },
    (disptach):any => {
        let acs = bindActionCreators({
            onDelete:  actions.deleteTodo,
            onAdd: actions.addTodo,
            onEdit: actions.editTodo,
            onFilter: actions.filerTodo,
            onToggleTodo: actions.toggleTodo
        }, disptach);
        return acs;
    }
)(TSTodos);
