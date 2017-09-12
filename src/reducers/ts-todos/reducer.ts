import { ITodoState, EFILTER, ITodoItem } from "&/interfaces/i-todos";
import * as uuid from "uuid";
import * as actionTypes from "./const";
import * as ReduxActions from "redux-actions";
const { handleActions } = ReduxActions;

const { v1 } = uuid;

const todoInitState: ITodoState = {
    filter: EFILTER.All,
    todos: [
        {
            contents: "first thing is first",
            id: v1(),
            finished: false
        }
    ]
};

// interface ITodoAction {
//     payload: string | ITodoItem,
// }

export default handleActions<ITodoState>(
    {
        [actionTypes.ADD]: (state, action): ITodoState => {
            return Object.assign({}, state, {
                todos: [...state.todos, action.payload]
            });
        },
        [actionTypes.TOGGLE_TODO]: (state, action) => {
            debugger;
            let { todos } = state;
            let { payload = "" } = action;
            let index = todos.findIndex(
                (item: ITodoItem) => item.id === payload
            );
            return Object.assign({}, state, {
                todos: [
                    ...todos.slice(0, index),
                    Object.assign({}, todos[index], {
                        finished: !todos[index].finished
                    }),
                    ...todos.slice(index+1)
                ]
            });
        }
    },
    todoInitState
);
