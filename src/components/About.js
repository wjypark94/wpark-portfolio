import React, { Component } from 'react';
import Headshot from '../images/headshot.png';
import '../componentStyles/About.css';

class About extends Component {
	render() {
		return (
			<div class="container py-3 py-lg-5">
				<div class="row">
					<div class="col-12 col-lg-6">
						<img className="img-fluid" src={Headshot} alt="headshot"/>
					</div>
					<div class="col-12 col-lg-6 text-left py-4 pt-lg-0"> 
						<div class="row">
							<div class="col-12">
								<h2 className="about-title">ABOUT ME</h2>
							</div>
							<div class="col-12 py-2 py-lg-3">
								<p className="about-description">
								Hey there! I’m a Front End Web Developer based in Los Angeles. I graduated from UC Riverside, worked at a physical therapist clinic, and eventually found my passion for web development. 
								</p>
								<p className="about-description">
								Originally coming from a pre-health background, I later realized that programming is my true passion. I regularly draw upon my experience as a physical therapy aide where being resourceful, taking initiative, and encouraging others were all essential keys to building a thriving community and successful production. 
								</p>
								<p className="about-description">
								Now, I’m a front end web developer working for a startup agency specializing in developing Ecommerce websites for clients on the Shopify platform. Although I have a strong focus on the front end, I enjoy all parts of the stack and relish any opportunity to work with new technologies to make myself and my code more efficient.  
								</p>
								<p className="about-description">
								When I'm not coding, you can find me rooting for the Lakers, backpacking through national parks, or searching for the best tacos in town. 
								</p>
								<p className="about-description"> Feel free to reach out via <a className="about-link" href="https://www.linkedin.com/in/wjypark/" target="_blank">Linkedin</a>, or feel free to reach out via email at <a className="about-link" href="mailto:wjypark94@gmail.com?subject=Hello%20Will!">wjypark94@gmail.com </a></p>
							</div>
							<div class="col-12 text-center text-lg-left">
								<a className="btn btn-primary resume-btn" href="https://drive.google.com/file/d/1fDTHifZDmA5G6ltCooWCJCysNwXwQR0M/view?usp=sharing" target="_blank">VIEW RESUME</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default About;

