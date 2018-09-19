import * as React from 'react';
import  * as enzyme from 'enzyme';
import * as renderer from 'react-test-renderer';
import * as Adapter from 'enzyme-adapter-react-15';
enzyme.configure({adapter: new Adapter()});
import TodoItem from '&/pages/ts-todos/todo-item';
import {ITodoItemProps} from '&/interfaces/i-todos';
  
describe('测试ts todo item', () => {
    let todoEl:React.ReactElement<ITodoItemProps>, todoProps:ITodoItemProps;

    beforeEach(() => {
        todoProps = {
            contents: 'first todo',
            id: '1',
            finished: false,
            onToggleTodo: jest.fn(),
            onDelete: jest.fn(),
            onEdit: jest.fn(),
        }
        todoEl = <TodoItem {...todoProps}/>
    })

    it('快照', () => {
        expect(renderer.create(todoEl)).toMatchSnapshot()
    })

    it('点击todo item, toggle todo 要被调用一次', () => {
        const wrapper  = enzyme.shallow(todoEl);
        wrapper.simulate('click');
        expect(todoProps.onToggleTodo).toHaveBeenCalledTimes(1)
    })
})