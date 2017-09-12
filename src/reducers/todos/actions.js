// @flow
import * as todoTypes from "./const";
import {v1} from 'uuid';

export default {
    header: {
        add: function(text/*:string*/)/*:string*/ {
            return {
                type: todoTypes.ADD_TODO,
                text,
                id: v1()
            };
        }
    },
    todoList: {
        toggle: function(id/*:string*/) {
            return { type: todoTypes.TOGGLE_TODO, id };
        },
        remove: function(id/*:string*/) {
            return { type: todoTypes.DEL_TODO, id };
        },
        edit: function(id/*:string*/, text/*:string*/) {
            return { type: todoTypes.EDIT_TODO, id, text };
        }
    },

    todoFilter: {
        filter: function(filter/*:string*/) {
            return { type: todoTypes.SET_FILTER, filter };
        }
    }
};
