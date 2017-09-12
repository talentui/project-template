import * as React from "react";
import { ITodoHeaderHandler } from "&/interfaces/i-todos";

export default class TodoHeader extends React.Component<
    ITodoHeaderHandler,
    {}
> {
    handleAddTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value.trim();
        if (value !== "" && e.keyCode == 13) {
            this.props.onAdd(value);
        }
    };

    render() {
        return (
            <div className="todo-header">
                <input type="text" onKeyDown={this.handleAddTodo} />
            </div>
        );
    }
}
