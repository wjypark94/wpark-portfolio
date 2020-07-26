import React, { Component } from 'react';
import '../componentStyles/Header.css';
import Scroll from 'react-scroll';
import Fade from 'react-reveal/Fade';
import Avatar from '../images/avatar.png';
import Ymy from '../images/ymy.png';

class Header extends Component {
	render() {
		let Link = Scroll.Link;
		return (
			<div className="container pt-5 hero">
				<div className="row">
					<Fade bottom>
					<div className="col-12 py-3 header-title">
						<h2>Hi, I'm <span>Will Park</span></h2>
						<h3>I'm a Front End Web Developer based in Los Angeles.</h3>
					</div>
					</Fade>
					<div class="col-12 text-center">
						<img className="work-img img-fluid" src={Avatar} alt="ymy"/>
					</div>

					<div class="col-12">
						<a class="px-3" href="mailto:wjypark94@gmail.com"><i class="icon fa fa-envelope"></i></a>
						<a class="px-3" href="https://github.com/wjypark94"><i class="icon fa fa-github-alt"></i></a>
						<a class="px-3" href="https://www.linkedin.com/in/wjypark"><i class="icon fa fa-linkedin"></i></a>
					</div>
					 
					<div class="col-12 py-3">
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