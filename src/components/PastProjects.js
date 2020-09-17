import React, { Component } from 'react';
import '../componentStyles/PastProjects.css';
import Fridgeful from '../images/fridgeful.png';
import Brewtrackr from '../images/brewtrackr.png';
import TrekCheck from '../images/trekcheck.png';
import HotCold from '../images/hotcold.png';

class PastProjects extends Component{
	render(){
		return (
			<div className="container">
				<div className="row mx-0 mx-lg-5">
					<div className="col-12 text-center text-md-left pl-0 py-3">
						<h2 className="work-header text-uppercase">Past Projects</h2>
					</div>
				</div>
				<div class="row mx-0 mx-lg-5">
					<div class="col-12 col-md-6 px-0 pr-md-2 pb-3">
						<div class="card h-100">
							<div class="card-body">
								<img className="img-fluid project-image" src={Fridgeful} alt="fridgeful"/>
								<div class="overlay w-100 px-3 d-flex align-items-center justify-content-center">
									<div class="row">
										<div className="col-12 py-2 title-col">
											<h2 className="project-title">Fridgeful</h2>
											<p className="project-description mb-0">Decrease food waste and search recipes based on what's in your fridge</p>
										</div>
										<div class="col-6 py-2 button-col">
											<a href="https://fridgeful.netlify.com/" class="btn btn-primary project-btn" title="Fridgeful Demo" target="_blank">Live</a>
										</div>
										<div class="col-6 py-2 button-col">
											<a href="https://github.com/wjypark94/fridgeful-client" class="btn btn-primary project-btn" title="Fridgeful Code" target="_blank">Github</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-12 col-md-6 px-0 pl-md-2 pb-3">
						<div class="card h-100">
							<div class="card-body">
								<img className="img-fluid project-image" src={Brewtrackr} alt="brewtrackr"/>
								<div class="overlay w-100 px-3 d-flex align-items-center justify-content-center">
									<div class="row">
										<div className="col-12 py-2 title-col">
											<h2 className="project-title">Brewtrackr</h2>
											<p className="project-description mb-0">Keep track of all your favorite coffee and breweries in a city</p>
										</div>
										<div class="col-6 py-2 button-col">
											<a href="https://brewtrackr.herokuapp.com/" class="btn btn-primary project-btn" title="Brewtrackr Demo" target="_blank">Live</a>
										</div>
										<div class="col-6 py-2 button-col">
											<a href="https://github.com/wjypark94/brew-trackr" class="btn btn-primary project-btn" title="Brewtrackr Code" target="_blank">Github</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-12 col-md-6 px-0 pr-md-2 pb-3">
						<div class="card h-100">
							<div class="card-body">
								<img className="img-fluid project-image" src={HotCold} alt="hotcold"/>	
								<div class="overlay w-100 px-3 d-flex align-items-center justify-content-center">
									<div class="row">
										<div className="col-12 py-2 title-col">
											<h2 className="project-title">Hot n Cold</h2>
											<p className="project-description mb-0">An interactive and simple number guessing game built with React and Redux</p>
										</div>
										<div class="col-6 py-2 button-col">
											<a href="https://hotcold.netlify.app/" class="btn btn-primary project-btn" title="Hotcold Demo" target="_blank">Live</a>
										</div>
										<div class="col-6 py-2 button-col">
											<a href="https://github.com/wjypark94/hot-cold" class="btn btn-primary project-btn" title="Hotcold Code" target="_blank">Github</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-12 col-md-6 px-0 pl-md-2 pb-3">
						<div class="card h-100">
							<div class="card-body">
								<img className="img-fluid project-image" src={TrekCheck} alt="trekcheck"/>
								<div class="overlay w-100 px-3 d-flex align-items-center justify-content-center">
									<div class="row">
										<div className="col-12 py-2 title-col">
											<h2 className="project-title">TrekCheck</h2>
											<p className="project-description mb-0">Check both the weather and nearby hiking trails with one quick search</p>
										</div>
										<div class="col-6 py-2 button-col">
											<a href="https://wjypark94.github.io/trek-check/" class="btn btn-primary project-btn" title="Trekcheck Demo" target="_blank">Live</a>
										</div>
										<div class="col-6 py-2 button-col">
											<a href="https://github.com/wjypark94/trek-check" class="btn btn-primary project-btn" title="Trekcheck Code" target="_blank">Github</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default PastProjects;
