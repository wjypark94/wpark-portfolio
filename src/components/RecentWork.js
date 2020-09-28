import React, { Component } from 'react';
import '../componentStyles/RecentWork.scss';
import Semihandmade from '../images/semihandmade.png';
import Laloop from '../images/laloop.png';
import Singnasium from '../images/singnasium.png';
import Ymy from '../images/ymy.png';
import Fade from 'react-reveal/Fade';

class RecentWork extends Component {
	render(){
		return (
			<div className="container py-3 py-lg-5" id="work">
				<div className="row mx-0 mx-lg-5">
					<div className="col-12 text-center text-md-left pl-0 py-3">
						<h2 className="work-header text-uppercase py-3">
							<Fade top>Recent Work</Fade>
						</h2>
					</div>
				</div>
				<Fade bottom>
				<div className="row work-border mb-5 mx-0 mx-lg-5">
					<div className="col-12 col-md-6 py-3 semihandmade-col">
					 	<img className="work-img img-fluid" src={Semihandmade} alt="semihandmade"/>
					</div>
					<div className="col-12 col-md-6 py-lg-5 py-4 text-left d-flex flex-column">
						<h3 className=" text-uppercase position-header">Front End Development + Design</h3>
						<h2 className="work-title">Semihandmade</h2>
						<p className="m-0 work-paragraph">Developed and implemented front end features for Semihandmade, a Shopify Plus client that makes custom doors for Ikea kitchen cabinets, bathroom, media and storage systems.</p>
						<a className="mt-auto site-link pt-3 pt-lg-0" href="https://www.semihandmade.com/" target="_blank" rel="noopener noreferrer">View Site</a>
					</div>
				</div>
				<div className="row work-border mb-5 mx-0 mx-lg-5">
					<div className="col-12 col-md-6 py-3 laloop-col">
						<img className="work-img img-fluid" src={Laloop} alt="laloop"/>
					</div>
					<div className="col-12 col-md-6 py-lg-5 py-4 text-left d-flex flex-column">
						<h3 className="text-uppercase position-header">Front End Development + Design</h3>
						<h2 className="work-title">La Loop</h2>
						<p className="m-0 work-paragraph">Developed and implemented front end features for La Loop, a Shopify client that creates and designs eyewear accessories for users. </p>
						<a className="mt-auto site-link pt-3 pt-lg-0" href="https://laloop.com/" target="_blank" rel="noopener noreferrer">View Site</a>
					</div>
				</div>
				<div className="row work-border mb-5 mx-0 mx-lg-5">
					<div className="col-12 col-md-6 py-3 ymy-col">
						<img className="work-img img-fluid" src={Ymy} alt="ymy"/>
					</div>
					<div className="col-12 col-md-6 py-lg-5 py-4 text-left d-flex flex-column">
						<h3 className="text-uppercase position-header">Front End Development + Design</h3>
						<h2 className="work-title">Yamamotoyama</h2>
						<p className="m-0 work-paragraph">Developed and implemented front end features for Yamamotoyama USA, a Shopify client that specializes in providing the finest teas and nori all over the world.</p>
						<a className="mt-auto site-link pt-3 pt-lg-0" href="https://dev-ymy.myshopify.com/" target="_blank" rel="noopener noreferrer">View Site</a>
					</div>
				</div>
				<div className="row work-border mb-5 mx-0 mx-lg-5">
					<div className="col-12 col-md-6 py-3 singnasium-col">
						<img className="work-img img-fluid" src={Singnasium} alt="singnasium"/>
					</div>
					<div className="col-12 col-md-6 py-lg-5 py-4 text-left d-flex flex-column">
						<h3 className="text-uppercase position-header">Front End Development + Design</h3>
						<h2 className="work-title">Singnasium</h2>
						<p className="m-0 work-paragraph">Developed and implemented front end features for Singnasium, a Shopify client that provides safe, non judgmental place for NYC artists and singers to explore their creative selves.</p>
						<a className="mt-auto site-link pt-3 pt-lg-0" href="https://singnasium.org/" target="_blank" rel="noopener noreferrer">View Site</a>
					</div>
				</div>
				</Fade>
			</div>
		)

	}

}

export default RecentWork;