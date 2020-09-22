import React, { Component } from 'react';
import '../componentStyles/Footer.scss';
import Fade from 'react-reveal/Fade';

class Footer extends Component{
	render(){
		return (
			<section className="footer-section">
				<div class="container py-3">
					<div class="row mx-0 mx-lg-5">
						<div class="col-12 pt-4">
							<a class="px-3" href="mailto:wjypark94@gmail.com"><i class="icon fa fa-envelope"></i></a>
							<a class="px-3" href="https://github.com/wjypark94"><i class="icon fa fa-github-alt"></i></a>
							<a class="px-3" href="https://www.linkedin.com/in/wjypark"><i class="icon fa fa-linkedin"></i></a>
							<Fade right>
							<p className="pt-4 footer-copyright"><i class="icon fa fa-copyright copyright-icon"></i>2020 - William Park</p>
							</Fade>
						</div>
					</div>
				</div>
			</section>
		)
	}
}


export default Footer;