import React, { Component } from 'react';
import Headshot from '../images/headshot.png';
import '../componentStyles/About.scss';
import Fade from 'react-reveal/Fade';

class About extends Component {
	render() {
		return (
			<div className="container py-3 py-lg-5 mt-4 mt-lg-5">
				<div className="row pt-3 pt-lg-5">
					<div className="col-12 col-lg-6">
						<Fade left>
						<img className="img-fluid" src={Headshot} alt="headshot"/>
						</Fade>
					</div>
					<div className="col-12 col-lg-6 text-left py-4 pt-lg-0"> 
						<div className="row">
							<div className="col-12">
								<h2 className="about-title"><Fade top>ABOUT ME</Fade></h2>
							</div>
							<div className="col-12 py-2 py-lg-3">
								<Fade right>
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
								<p className="about-description"> Feel free to reach out via <a className="about-link" href="https://www.linkedin.com/in/wjypark/" target="_blank" rel="noopener noreferrer">Linkedin</a>, or feel free to reach out via email at <a className="about-link" href="mailto:wjypark94@gmail.com?subject=Hello%20Will!">wjypark94@gmail.com </a></p>
								</Fade>
							</div>
							<div className="col-12 text-center text-lg-left">
								<a className="btn btn-primary resume-btn" href="https://drive.google.com/file/d/1XBz46PEnGe1R5ws2BOneutMYyIcq50IM/view?usp=sharing" target="_blank" rel="noopener noreferrer">VIEW RESUME</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		) 
	}
}

export default About;

