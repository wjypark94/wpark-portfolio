import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import '../componentStyles/Background.scss';

class Background extends Component{
	render(){
		return (
			<section className="background-section">
				<div class="container py-3 py-lg-5">
					<div class="row mx-0 mx-lg-5 py-3">
						<div class="col-12 text-center text-md-left pl-0">
							<h2 class="contact-header text-uppercase py-lg-3 mb-0 py-1"><Fade top>Background</Fade></h2>
						</div>
					</div>
					<div class="row mx-0 mx-lg-5">
						<div class="col-4 text-left px-0">
							<h2 className="py-3 background-header">Education</h2>
							<ul className="p-0 m-0">
								<li>
									<h3 className="background-title">Thinkful</h3>
									<p className="background-description">Full Stack Web Development</p>
								</li>
								<li>
									<h3 className="background-title">UC Riverside</h3>
									<p className="background-description">Business Economics/Psychology</p>
								</li>
							</ul>
						</div>
						<div class="col-4 text-left px-0">
							<h2 className="py-3 background-header">Experience</h2>
							<ul className="p-0 m-0"> 
								<li>
									<h3 className="background-title">Bluedge USA</h3>
									<p className="background-description">Front End Developer</p>
								</li>
								<li>
									<h3 className="background-title">Clicktool</h3>
									<p className="background-description">Front End Developer Freelance</p>
								</li>
							</ul>
						</div>
						<div class="col-4 text-left px-0">
							<h2 className="py-3 background-header">Passion</h2>
							<ul className="p-0 m-0">
								<li>	
									<h3 className="background-title">Web Development</h3>
									<p className="background-description">I love to code</p>
								</li>
								<li>
									<h3 className="background-title">Travel</h3>
									<p className="background-description">I love exploring new cities and cultures. I also hope to backpack all the national parks</p>
								</li>
								<li>
									<h3 className="background-title">Photography/Videography</h3>
									<p className="background-description">I love the different perspectives a camera gives me in creatively thinking about and reacting to the world around me. </p>
								</li>
							</ul>
						</div>

					</div>
				</div>
			</section>
		)
	}
}


export default Background;