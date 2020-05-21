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

				<div className="row mx-0 mx-lg-5 mb-5">
					<div className="col-6">
						<div className="row work-border mr-1">
							<div className="col-12 px-0">
								<img className="img-fluid" src={Fridgeful} alt="fridgeful"/>
							</div>
							<div className="col-12">
								<h2 className="work-title">Fridgeful</h2>
								<p className="work-paragraph">App description</p>
							</div>
						</div>
					</div>
					<div className="col-6">
						<div className="row work-border ml-1">
							<div className="col-12 px-0">
								<img className="img-fluid" src={Brewtrackr} alt="brewtrackr"/>
							</div>
							<div className="col-12">
								<h2 className="work-title">BrewTrackr</h2>
								<p className="work-paragraph">App description</p>
							</div>
						</div>
					</div>
				</div>


				<div className="row mx-0 mx-lg-5 mb-5">
					<div className="col-6">
						<div className="row work-border mr-1">
							<div className="col-12 px-0">
								<img className="img-fluid" src={HotCold} alt="hotcold"/>
							</div>
							<div className="col-12">
								<h2 className="work-title">Hot N' Cold</h2>
								<p className="work-paragraph">App description</p>
							</div>
						</div>
					</div>
					<div className="col-6">
						<div className="row work-border ml-1">
							<div className="col-12">
								<img className="img-fluid" src={TrekCheck} alt="trekcheck"/>
							</div>
							<div className="col-12">
								<h2 className="work-title">TrekCheck</h2>
								<p className="work-paragraph">App description</p>
							</div>
						</div>
					</div>
				</div>

				



			</div>
		)
	}
}

export default PastProjects;
