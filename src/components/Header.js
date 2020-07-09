import React, { Component } from 'react';
import '../componentStyles/Header.css';
import Scroll from 'react-scroll';
import Fade from 'react-reveal/Fade';

class Header extends Component {
	render() {
		let Link = Scroll.Link;
		return (
			<div className="container pt-5 hero">
				<div className="row">
					<Fade bottom>
					<div className="col-12 py-3 header-title">
						<h2>Hi, I'm Will Park</h2>
						<h2>I'm a Front End Web Developer based in Los Angeles.</h2>
					</div>
					</Fade>
					<div class="col-12 pb-3">
						<a href="/">View recent work</a>
					</div>
				</div>
				<Fade bottom>
					<div class="row">
						<div className="col-12 arrow-wrapper w-100">
							<Link to="about" offset={-40} spy={true} smooth={true} duration={700}>
							<i className="fa fa-chevron-down smooth-container" aria-hidden="true" ></i>
							</Link>
						</div>
					</div>
				</Fade>

			</div>

		)
	}
}

export default Header;