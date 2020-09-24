import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import '../componentStyles/Background.scss';

class Background extends Component{
	render(){
		return (
			<section className="background-section">
				<div class="container py-3">
					<div class="row mx-0 mx-lg-5 py-3">
						<div class="col-12 text-center text-md-left pl-0">
							<h2 class="background-header text-uppercase py-lg-3 mb-0 py-1"><Fade top>Background</Fade></h2>
						</div>
					</div>
					<div class="row mx-0 mx-lg-5 py-lg-2">
						<div class="col-12 col-lg-4 text-left px-0">
							<Fade left>
							<h2 className="py-3 background-heading"><i class="fas fa-book-open background-icon"></i> Education</h2>
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
							</Fade>
						</div>
						<div class="col-12 col-lg-4 text-left px-0">
							<Fade left>
							<h2 className="py-3 background-heading"><i class="fas fa-briefcase background-icon"></i> Experience</h2>
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
							</Fade>
						</div>
						<div class="col-12 col-lg-4 text-left px-0">
							<Fade left>
							<h2 className="py-3 background-heading"><i class="far fa-thumbs-up background-icon"></i> Passion</h2>
							<ul className="p-0 m-0">
								<li>	
									<h3 className="background-title">Web Development</h3>
									<p className="background-description">Solving complicated problems and bringing ideas to life brings me great joy.</p>
								</li>
								<li>
									<h3 className="background-title">Travel</h3>
									<p className="background-description">I love exploring new cities and cultures.</p>
								</li>
								<li>
									<h3 className="background-title">Photography/Videography</h3>
									<p className="background-description">Photography also makes me creative and productive to practice patience and focus.</p>
								</li>
							</ul>
							</Fade>
						</div>

					</div>
				</div>
			</section>
		)
	}
}


export default Background;