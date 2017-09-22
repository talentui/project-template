import React from "react";
import ReactDom from 'react-dom';
import renderer from 'react-test-renderer';
import TodoItem from '&/pages/todos/todo-item';
import {mount} from 'enzyme';

describe('测试js版本todoItem', () => {

    let todoEl, todoProps;
    beforeEach(() => {
        todoProps = {
            toggle: jest.fn(),
            edit: jest.fn(),
            remove: jest.fn(),
            todo: {
                id: '1',
                text: 'first todo',
                finished: false
            }
        }
        todoEl = <TodoItem {...todoProps} />
    })

    it('可以正常渲染', ()=>{
        expect(renderer.create(todoEl)).toMatchSnapshot();
    });

    it('当点击item的时候，toggle方法要被调用一次', () => {
        const wrapper = mount(todoEl);
        wrapper.find('li').simulate('click');
        expect(todoProps.toggle).toHaveBeenCalledTimes(1);
    })
})