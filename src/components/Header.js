import React, { Component } from 'react';
import '../componentStyles/Header.scss';
import Scroll from 'react-scroll';
import Fade from 'react-reveal/Fade';
import Avatar from '../images/avatar.png';
import Ymy from '../images/ymy.png';

class Header extends Component {
	render() {
		let Link = Scroll.Link;
		return (
			<section className="header-section">
				<div className="container pt-5 hero">
			
					<div className="row pt-3 pt-lg-4">
						<div className="col-12 py-3 header-title">
							<Fade top>
							<h2>Hi, I'm <span>Will Park</span></h2>
							<h3>I'm a Front End Web Developer based in Los Angeles.</h3>
							</Fade>
						</div>
						<div class="col-12 text-center">
							<Fade bottom>
							<img className="work-img img-fluid" src={Avatar} alt="ymy"/>
							</Fade>
						</div>
						<div class="col-12 py-3">
							<a class="px-2" href="mailto:wjypark94@gmail.com" target="_blank"><i class="icon fa fa-envelope"></i></a>
							<a class="px-2" href="https://github.com/wjypark94" target="_blank"><i class="icon fa fa-github-alt"></i></a>
							<a class="px-2" href="https://www.linkedin.com/in/wjypark" target="_blank"><i class="icon fa fa-linkedin"></i></a>
						</div>
					</div>
				</div>
			</section>

		)
	}
}

export default Header;