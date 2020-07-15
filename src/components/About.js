import React, { Component } from 'react';
import Headshot from '../images/headshot.png';

class About extends Component {
	render() {
		return (
			<div class="container pt-5">
				<div class="row">
					<div class="col-6">
						<img className="img-fluid" src={Headshot} alt="headshot"/>
					</div>
					<div class="col-6 text-left"> 
						<div class="row">
							<div class="col-12">
								<h2>ABOUT ME</h2>
							</div>
							<div class="col-12">
								<p>
								Hey there! I’m a Front End Web Developer based in Los Angeles. I graduated from UC Riverside, worked at a physical therapist clinic, and eventually found my passion for web development. 
								</p>
								<p>
								Originally coming from a pre-health background, I later realized that programming is my true passion. I regularly draw upon my experience as a physical therapy aide where being resourceful, taking initiative, and encouraging others were all essential keys to building a thriving community and successful production. 
								</p>
								<p>
								Now, I’m a front end web developer working for a startup agency specializing in developing Ecommerce websites for clients on the Shopify platform. Although I have a strong focus on the front end, I enjoy all parts of the stack and relish any opportunity to work with new technologies to make myself and my code more efficient.  
								</p>
								<p>
								When I'm not coding, you can find me rooting for the Lakers, backpacking through national parks, or searching for the best tacos in town. 
								</p>
							</div>
							<div class="col-12">
								<h2>CONTACT</h2>
							</div>
							<div class="col-12">
								<p> Feel free to reach out via <a href="https://www.linkedin.com/in/wjypark/" target="_blank">Linkedin</a>, or feel free to reach out via email at <a href="mailto:wjypark94@gmail.com?subject=Hello%20Will!">wjypark94@gmail.com </a></p>
							</div>
							<div class="col-12">
								<a class="btn btn-primary" href="https://drive.google.com/file/d/1fDTHifZDmA5G6ltCooWCJCysNwXwQR0M/view?usp=sharing" target="_blank">VIEW RESUME</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default About;

