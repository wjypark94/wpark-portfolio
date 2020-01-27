import React, { Component } from 'react';
import '../componentStyles/Header.css';

class Header extends Component {
	render() {
		return (
			<div className="container pt-5">
				<div className="row">
					<div className="col py-3 header-title">
						<h2>Hi, my name is Will Park and</h2>
						<h2>I'm a front end web developer.</h2>
						<a href="/">View recent work</a>
					</div>
				</div>
				
			</div>

		)
	}
}

export default Header;