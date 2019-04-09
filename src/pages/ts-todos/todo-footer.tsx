import React from 'react';
import {ITodoFooterHandler, EFILTER} from '../../interfaces/i-todos';

export default class TodoFooter extends React.Component<ITodoFooterHandler>{

    handleFilter = (filter: EFILTER) => (e:React.SyntheticEvent<HTMLAnchorElement>) => {
        this.props.onFilter(filter)
    }

    render(){
        return <ul className="todo-filter">
            <li><a href='javascript:;' onClick={this.handleFilter(EFILTER.All)}>全部</a></li>
            <li><a href='javascript:;' onClick={this.handleFilter(EFILTER.Active)}>未完成</a></li>
            <li><a href='javascript:;' onClick={this.handleFilter(EFILTER.Finished)}>已完成</a></li>
        </ul>
    }
}