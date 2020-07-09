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
								Hey there! I’m a Front End Web Developer based in Los Angeles. I graduated from UC Riverside, worked at a physical therapist clinic, and eventually found my passion for web development. 
								<br/>
								<br/>
								Originally coming from a pre-health background, I later realized that programming is my true passion. I regularly draw upon my experience as a physical therapy aide where being resourceful, taking initiative, and encouraging others were all essential keys to building a thriving community and successful production. 
								<br/>
								<br/>
								I took online courses and read through blogs to understand how to program, but found that I learned best through real life projects and writing code. I enrolled into Thinkful’s six month intensive course on full stack development and eventually landed my first full time Front End Developer role at a startup agency. 
								<br/>
								<br/>
								Now, I’m a front end web developer working for a startup agency specializing in developing Ecommerce websites for clients on the Shopify platform. Although I have a strong focus on the front end, I enjoy all parts of the stack and relish any opportunity to work with new technologies to make myself and my code more efficient.  
								<br/>
								<br/>
								When I'm not coding, you can find me rooting for the Lakers, backpacking through national parks, or searching for the best tacos in town. 
								</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default About;

