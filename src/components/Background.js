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
				</div>
				<div class="row">
					<div class="col-4">
						<h2 className="py-3">Education</h2>
						<ul>
							<li>
								<h3>Thinkful</h3>
								<p>Full Stack Web Development</p>
							</li>
							<li>
								<h3>UC Riverside</h3>
								<p>Business Economics/Psychology</p>
							</li>
						</ul>
					</div>
					<div class="col-4">
						<h2 className="py-3">Experience</h2>
						<ul>
							<li>
								<h3>Bluedge USA</h3>
								<p>Front End Developer</p>
							</li>
							<li>
								<h3>Clicktool</h3>
								<p>Front End Developer Freelance</p>
							</li>
						</ul>
					</div>
					<div class="col-4">
						<h2 className="py-3">Passion</h2>
						<ul>
							<li>	
								<h3>Web Development</h3>
								<p>I love to code</p>
							</li>
							<li>
								<h3>Travel</h3>
								<p>I love exploring new cities and cultures. I also hope to backpack all the national parks</p>
							</li>
							<li>
								<h3>Photography/Videography</h3>
								<p>I love the different perspectives a camera gives me in creatively thinking about and reacting to the world around me. </p>
							</li>
						</ul>
					</div>

				</div>
			</div>
		)
	}
}


export default Background;