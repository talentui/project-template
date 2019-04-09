import React from "react";
import { ITodoListProps } from "../../interfaces/i-todos";
import TodoItem from "./todo-item";

const TodoList: React.StatelessComponent<ITodoListProps > = (props) => {
    let {onDelete, onEdit, onToggleTodo} = props;
    return (
        <ul className="todo-list">
            {props.todos.map((item, index) => {
                return <TodoItem {...item} onDelete={onDelete} onEdit={onEdit} key={item.id} onToggleTodo={onToggleTodo}/>;
            })}
        </ul>
    );
};

export default TodoList;
