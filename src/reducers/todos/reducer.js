import * as types from "./const";

const initState = {
    todos: [],
    filter: 'all'
};
export default function(state = initState, action) {
    switch (action.type) {
        case types.ADD_TODO:
            var { text, id } = action;
            return Object.assign({}, state, {
                todos: [{ text, id, finished: false },...state.todos]
            });

        case types.DEL_TODO:
            var { id } = action;
            var index = state.todos.findIndex(item => item.id === id);
            return Object.assign({}, state, {
                todos: [
                    ...state.todos.slice(0, index),
                    ...state.todos.slice(index + 1)
                ]
            });
        case types.EDIT_TODO:
            var { id, text } = action;
            var index = state.todos.findIndex(item => item.id === id);
            return Object.assign({}, state, {
                todos: [
                    ...state.todos.slice(0, index),
                    Object.assign({}, state.todos[index], {
                        text
                    }),
                    ...state.todos.slice(index + 1)
                ]
            });

        case types.TOGGLE_TODO:
            var { id } = action;
            var index = state.todos.findIndex(item => item.id === id);
            return Object.assign({}, state, {
                todos: [
                    ...state.todos.slice(0, index),
                    Object.assign({}, state.todos[index], {
                        finished: !state.todos[index].finished
                    }),
                    ...state.todos.slice(index + 1)
                ]
            });

        case types.SET_FILTER:
            var {filter} = action;
            return Object.assign({}, state, {
                filter
            })

        default:
            return state;
    }
}
