import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import '../componentStyles/Background.scss';

class Background extends Component{
	render(){
		return (
			<div class="container py-3 py-lg-5">
				<div class="row mx-0 mx-lg-5 py-3">
					<div class="col-12 text-center text-md-left pl-0">
						<h2 class="contact-header text-uppercase py-lg-3 mb-0 py-1"><Fade top>Background</Fade></h2>
					</div>
					<div class="col-12 text-center py-4 py-lg-5">
						<h3 className="contact-title mb-0"><Fade left>Get In Touch</Fade></h3>
						<p class="m-0 contact-description pt-3 pt-lg-4">Learn more <a href="/about" className="contact-link">about me</a> or feel free to reach out to chat!</p>
						<p class="m-0 contact-description">Living, learning, and leveling up one day at a time.</p>
					</div>
				</div>
			</div>
		)
	}
}


export default Background;