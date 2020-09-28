import React, { Component } from 'react';
import '../componentStyles/Header.scss';
import Scroll from 'react-scroll';
import Fade from 'react-reveal/Fade';
import Avatar from '../images/avatar.png';
import Typical from 'react-typical'

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
							<h3>I'm a{' '}					
							<Typical
							className="typical"
							steps={['Frontend Developer', 1500, 'Creative Designer', 1500, 'Collaborator', 1500, 'Photographer', 1500]}
							loop={Infinity}
							wrapper="span"
							/></h3>
							</Fade>
						</div>
						<div className="col-12 text-center">
							<Fade bottom>
							<img className="work-img img-fluid" src={Avatar} alt="Avatar"/>
							</Fade>
						</div>
						<div className="col-12 py-3">
							<a className="px-2" href="mailto:wjypark94@gmail.com" target="_blank" rel="noopener noreferrer"><i className="icon fa fa-envelope"></i></a>
							<a className="px-2" href="https://github.com/wjypark94" target="_blank" rel="noopener noreferrer"><i className="icon fa fa-github-alt"></i></a>
							<a className="px-2" href="https://www.linkedin.com/in/wjypark" target="_blank" rel="noopener noreferrer"><i className="icon fa fa-linkedin"></i></a>
						</div>
					</div>
					<div className="row justify-content-center pt-5">
						<div classNamee="col-12">
							<div className="arrow-wrapper">
								<Fade bottom>
									<Link to="background" offset={-40} spy={true} smooth={true} duration={200}>
									<i className="fa fa-chevron-down smooth-container" aria-hidden="true" ></i>
									</Link>
								</Fade>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Header;