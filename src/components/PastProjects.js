import React, { Component } from 'react';
import '../componentStyles/PastProjects.scss';
import Fridgeful from '../images/fridgeful.png';
import Brewtrackr from '../images/brewtrackr.png';
import TrekCheck from '../images/trekcheck.png';
import HotCold from '../images/hotcold.png';
import Fade from 'react-reveal/Fade';

class PastProjects extends Component{
	render(){
		return (
			<section className="past-projects-section">
				<div className="container pb-5 py-3 py-lg-5">
					<div className="row mx-0 mx-lg-5">
						<div className="col-12 text-center text-md-left pl-0 py-3">
							<h2 className="work-header text-uppercase py-3"><Fade top>Past Projects</Fade></h2>
						</div>
					</div>
					<div className="row mx-0 mx-lg-5">
						<div className="col-12 col-md-6 px-0 pr-md-2 pb-3">
							<div className="card h-100">
								<div className="card-body">
									<img className="img-fluid project-image" src={Fridgeful} alt="fridgeful"/>
									<div className="overlay w-100 px-3 d-flex align-items-center justify-content-center">
										<div className="row">
											<div className="col-12 py-2 title-col">
												<h2 className="project-title">Fridgeful</h2>
												<p className="project-description mb-0">Decrease food waste and search recipes based on what's in your fridge</p>
											</div>
											<div className="col-6 py-2 button-col">
												<a href="https://fridgeful.netlify.com/" className="btn btn-primary project-btn" title="Fridgeful Demo" target="_blank" rel="noopener noreferrer">Live</a>
											</div>
											<div className="col-6 py-2 button-col">
												<a href="https://github.com/wjypark94/fridgeful-client" className="btn btn-primary project-btn" title="Fridgeful Code" target="_blank" rel="noopener noreferrer">Github</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-12 col-md-6 px-0 pl-md-2 pb-3">
							<div className="card h-100">
								<div className="card-body">
									<img className="img-fluid project-image" src={Brewtrackr} alt="brewtrackr"/>
									<div className="overlay w-100 px-3 d-flex align-items-center justify-content-center">
										<div className="row">
											<div className="col-12 py-2 title-col">
												<h2 className="project-title">Brewtrackr</h2>
												<p className="project-description mb-0">Keep track of all your favorite coffee and breweries in a city</p>
											</div>
											<div className="col-6 py-2 button-col">
												<a href="https://brewtrackr.herokuapp.com/" className="btn btn-primary project-btn" title="Brewtrackr Demo" target="_blank" rel="noopener noreferrer">Live</a>
											</div>
											<div className="col-6 py-2 button-col">
												<a href="https://github.com/wjypark94/brew-trackr" className="btn btn-primary project-btn" title="Brewtrackr Code" target="_blank" rel="noopener noreferrer">Github</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-12 col-md-6 px-0 pr-md-2 pb-3">
					
							<div className="card h-100">
								<div className="card-body">
									<img className="img-fluid project-image" src={HotCold} alt="hotcold"/>	
									<div className="overlay w-100 px-3 d-flex align-items-center justify-content-center">
										<div className="row">
											<div className="col-12 py-2 title-col">
												<h2 className="project-title">Hot n Cold</h2>
												<p className="project-description mb-0">An interactive and simple number guessing game built with React and Redux</p>
											</div>
											<div className="col-6 py-2 button-col">
												<a href="https://hotcold.netlify.app/" className="btn btn-primary project-btn" title="Hotcold Demo" target="_blank" rel="noopener noreferrer">Live</a>
											</div>
											<div className="col-6 py-2 button-col">
												<a href="https://github.com/wjypark94/hot-cold" className="btn btn-primary project-btn" title="Hotcold Code" target="_blank" rel="noopener noreferrer">Github</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						
						</div>
						<div className="col-12 col-md-6 px-0 pl-md-2 pb-3">
							<div className="card h-100">
								<div className="card-body">
									<img className="img-fluid project-image" src={TrekCheck} alt="trekcheck"/>
									<div className="overlay w-100 px-3 d-flex align-items-center justify-content-center">
										<div className="row">
											<div className="col-12 py-2 title-col">
												<h2 className="project-title">TrekCheck</h2>
												<p className="project-description mb-0">Check both the weather and nearby hiking trails with one quick search</p>
											</div>
											<div className="col-6 py-2 button-col">
												<a href="https://wjypark94.github.io/trek-check/" className="btn btn-primary project-btn" title="Trekcheck Demo" target="_blank" rel="noopener noreferrer">Live</a>
											</div>
											<div className="col-6 py-2 button-col">
												<a href="https://github.com/wjypark94/trek-check" className="btn btn-primary project-btn" title="Trekcheck Code" target="_blank" rel="noopener noreferrer">Github</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default PastProjects;
