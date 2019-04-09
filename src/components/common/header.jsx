import * as React from "react";
import * as ReactRouterDom from "react-router-dom";
import "./header.scss"; 

const {Link} = ReactRouterDom;

export default class Header extends React.Component {
    render() {
        return (
            <div id="header-region">
                <h2>
                    <Link to="/">Talent UI 2.0</Link>
                </h2>
                <ul>
                    <li className="home"><Link to="/">home</Link></li>
                    <li className="todos">
                        <Link to="/todos">todos</Link>
                    </li>
                    <li className="demo">
                        <Link to="/ts-todos">type script todos</Link>
                    </li>
                </ul>
                <select ref="langSwitcher" defaultValue="en">
                    <option value="en">EN</option>
                    <option value="zn">ZN</option>
                </select>
            </div>
        );
    }
}
