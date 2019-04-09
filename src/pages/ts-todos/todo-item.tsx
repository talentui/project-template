import React from 'react';
import {ITodoItemProps, IHOFCommonEvent, IHOFInputEvent} from '../../interfaces/i-todos';

export default class TodoItem extends React.Component<ITodoItemProps, {}>{

    handleDeleteTodo:IHOFCommonEvent = (key) => (vnt) => {
        this.props.onDelete(key);
    }

    handleEditTodo: IHOFInputEvent = (key) => (vnt) => {
        this.props.onEdit(key, vnt.currentTarget.value)
    }

    handleToggleTodo = (id:string) => () => {
        this.props.onToggleTodo(id);
    }
    
    render(){
        return <li className="todo-item" onClick={this.handleToggleTodo(this.props.id)}>
            <input checked={this.props.finished} type='checkbox' readOnly />
            {this.props.contents}
            <a className="btn-remove" href="javascript:;" onClick={this.handleDeleteTodo(this.props.id)}>xxx</a>
        </li>
    }
}

