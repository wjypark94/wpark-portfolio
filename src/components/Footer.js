import React, { Component } from 'react';
import '../componentStyles/Footer.css';
import Fade from 'react-reveal/Fade';

class Footer extends Component{
	render(){
		return (
			<div class="container py-3 py-lg-5">
				<div class="row mx-0 mx-lg-5">
					<div class="col-12 text-center text-md-left pl-0">
						<h2 class="contact-header text-uppercase py-3">
							<Fade top>Contact</Fade>
						</h2>
					</div>
					<div class="col-12 text-center py-4 py-lg-5">
						<Fade bottom>
						<h3 className="footer-title">Get In Touch</h3>
						<p class="m-0 footer-description pt-3 pt-lg-4">Learn more <a href="/about" className="contact-link">about me</a> or feel free to reach out to chat!</p>
						<p class="m-0 footer-description">Living, learning, and leveling up one day at a time.</p>
						</Fade>
					</div>
					<div class="col-12">
						<Fade right>
						<a class="px-3" href="mailto:wjypark94@gmail.com"><i class="icon fa fa-envelope"></i></a>
						<a class="px-3" href="https://github.com/wjypark94"><i class="icon fa fa-github-alt"></i></a>
						<a class="px-3" href="https://www.linkedin.com/in/wjypark"><i class="icon fa fa-linkedin"></i></a>
						<p className="pt-4 footer-copyright"><i class="icon fa fa-copyright copyright-icon"></i>2020 - William Park</p>
						</Fade>
					</div>

				</div>
				
			</div>
		)
	}
}


export default Footer;