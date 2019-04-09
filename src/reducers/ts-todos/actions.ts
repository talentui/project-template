import * as ReduxActions from "redux-actions";
import { ITodoItem, EFILTER } from "../../interfaces/i-todos";
import * as uuid from "uuid";
import { DELETE, ADD, EDIT, FILTER, TOGGLE_TODO } from "./const";

const { createAction } = ReduxActions;

export const addTodo = createAction<ITodoItem, string>(ADD, (contents:string) => {
    return {
        contents,
        id: uuid.v1(),
        finished: false
    };
});

export const deleteTodo = createAction<string>(DELETE);

export const editTodo = createAction<{contents:string, id:string}>(EDIT);

export const filerTodo = createAction<EFILTER>(FILTER);

export const toggleTodo=createAction<string>(TOGGLE_TODO)