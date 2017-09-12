import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Sidebar extends Component {
	render() {
		return (
			<div id="sidebar-region" className="col-md-3">
				<ul className="nav nav-list">
					<li>
						<h4>Sidebar Menu</h4>
					</li>
					<li>
						<Link to="/">Menu1</Link>
					</li>
					<li>
						<Link to="/">Menu2</Link>
					</li>
					<li>
						<Link to="/">Menu3</Link>
					</li>
					<li>
						<Link to="/">Menu4</Link>
					</li>
					<li>
						<Link to="/">Menu5</Link>
					</li>
					<li>
						<Link to="/">Menu6</Link>
					</li>
				</ul>
			</div>
		);
	}
}
