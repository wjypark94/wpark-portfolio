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
								<div className="image-wrapper">
									<img className="img-fluid project-image" src={Fridgeful} alt="fridgeful"/>
									<div className="overlay">
										<div className="text">Read More</div>
									</div>
								</div>

								{/* <h5 class="card-title pt-3 pt-lg-5">Fridgeful</h5>
								<p class="card-text">Helping users decrease the amount of food waste in the world, Fridgeful allows users to search recipes based on the ingredients in their fridge. Users are able to write comments and save recipes into their own personal database.</p>
								<div class="row">
									<div class="col-12 col-lg-6 py-2">
										<a href="https://fridgeful.netlify.com/" class="btn btn-primary w-100 project-btn" title="Fridgeful Demo" target="_blank">Demo</a>
									</div>
									<div class="col-12 col-lg-6 py-2">
										<a href="https://github.com/wjypark94/fridgeful-client" class="btn btn-primary w-100 project-btn" title="Fridgeful Code" target="_blank">Code</a>
									</div>
								</div> */}


							</div>
						</div>
					</div>
					<div class="col-12 col-md-6 px-0 pl-md-2 pb-3">
						<div class="card h-100">
							<div class="card-body">
								<img className="img-fluid project-image" src={Brewtrackr} alt="brewtrackr"/>

								{/* <h5 class="card-title pt-3 pt-lg-5">Brewtrackr</h5>
								<p class="card-text">BrewTrackr allows users to search for coffee or breweries in any city. Users are able to write their own reviews and save their search results into their own list. Keep track of all your favorite coffee and breweries with BrewTrackr.</p>
								<div class="row">
									<div class="col-12 col-lg-6 py-2">
										<a href="https://brewtrackr.herokuapp.com/" class="btn btn-primary w-100 project-btn" title="Brewtrackr Demo" target="_blank">Demo</a>
									</div>
									<div class="col-12 col-lg-6 py-2">
										<a href="https://github.com/wjypark94/brew-trackr" class="btn btn-primary w-100 project-btn" title="Brewtrackr Code" target="_blank">Code</a>
									</div>
								</div> */}


							</div>
						</div>
					</div>
					<div class="col-12 col-md-6 px-0 pr-md-2 pb-3">
						<div class="card h-100">
							<div class="card-body">
								<img className="img-fluid project-image" src={HotCold} alt="hotcold"/>	
								{/* <h5 class="card-title pt-3 pt-lg-5">Hot N' Cold</h5>
								<p class="card-text">Built with React and Redux, Hot or Cold is an interactive and simple number guessing game. The app allows users to attempt to guess a randomly generated number with cold or hot hints throughout the game.</p>
								<div class="row">
									<div class="col-12 col-lg-6 py-2">
										<a href="https://hotcold.netlify.app/" class="btn btn-primary w-100 project-btn" title="HotnCold Demo" target="_blank">Demo</a>
									</div>
									<div class="col-12 col-lg-6 py-2">
										<a href="https://github.com/wjypark94/hot-cold" class="btn btn-primary w-100 project-btn" title="HotnCold Code" target="_blank">Code</a>
									</div>
								</div> */}
							</div>
						</div>
					</div>
					<div class="col-12 col-md-6 px-0 pl-md-2 pb-3">
						<div class="card h-100">
							<div class="card-body">
								<img className="img-fluid project-image" src={TrekCheck} alt="trekcheck"/>
								{/* <h5 class="card-title pt-3 pt-lg-5">TrekCheck</h5>
								<p class="card-text">TrekCheck is a responsive web application that allows users to look up both hiking and weather data in a specified location with one quick search. Check the current weather and find the best hiking trails nearby with TrekCheck.</p>
								<div class="row">
									<div class="col-12 col-lg-6 py-2">
										<a href="https://wjypark94.github.io/trek-check/" class="btn btn-primary w-100 project-btn" title="TrekCheck Demo" target="_blank">Demo</a>
									</div>
									<div class="col-12 col-lg-6 py-2">
										<a href="https://github.com/wjypark94/trek-check" class="btn btn-primary w-100 project-btn" title="TrekCheck Code" target="_blank">Code</a>
									</div>
								</div> */}
							</div>
						</div>
					</div>


				</div>

				{/* <div className="row mx-0 mx-lg-5 mb-5">
					<div className="col-12 col-md-6">
						<div className="row work-border mr-md-1">
							<div className="col-12 px-0">
								<img className="img-fluid" src={Fridgeful} alt="fridgeful"/>
							</div>
							<div className="col-12">
								<h2 className="work-title">Fridgeful</h2>
								<p className="work-paragraph">Helping users decrease the amount of food waste in the world, Fridgeful allows users to search recipes based on the ingredients in their fridge. Users are able to write comments and save recipes into their own personal database.</p>
							</div>
						</div>
					</div>
					<div className="col-12 col-md-6">
						<div className="row work-border ml-md-1">
							<div className="col-12 px-0">
								<img className="img-fluid" src={Brewtrackr} alt="brewtrackr"/>
							</div>
							<div className="col-12">
								<h2 className="work-title">BrewTrackr</h2>
								<p className="work-paragraph">BrewTrackr allows users to search for coffee or breweries in any city. Users are able to write their own reviews and save their search results into their own list. Keep track of all your favorite coffee and breweries with BrewTrackr.</p>
							</div>
						</div>
					</div>
				</div>


				<div className="row mx-0 mx-lg-5 mb-5">
					<div className="col-12 col-md-6">
						<div className="row work-border mr-md-1">
							<div className="col-12 px-0">
								<img className="img-fluid" src={HotCold} alt="hotcold"/>
							</div>
							<div className="col-12">
								<h2 className="work-title">Hot N' Cold</h2>
								<p className="work-paragraph">Built with React and Redux, Hot or Cold is an interactive and simple number guessing game. The app allows users to attempt to guess a randomly generated number with cold or hot hints throughout the game.</p>
							</div>
						</div>
					</div>
					<div className="col-12 col-md-6">
						<div className="row work-border ml-md-1">
							<div className="col-12">
								<img className="img-fluid" src={TrekCheck} alt="trekcheck"/>
							</div>
							<div className="col-12">
								<h2 className="work-title">TrekCheck</h2>
								<p className="work-paragraph">TrekCheck is a responsive web application that allows users to look up both hiking and weather data in a specified location with one quick search. Check the current weather and find the best hiking trails nearby with TrekCheck.</p>
							</div>
						</div>
					</div>
				</div> */}

				



			</div>
		)
	}
}

export default PastProjects;
