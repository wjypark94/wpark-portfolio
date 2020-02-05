import React, { Component } from 'react';
import '../componentStyles/RecentWork.css';
import Semihandmade from '../images/semihandmade.png';
import Laloop from '../images/laloop.png';
import Singnasium from '../images/singnasium.png';
import Ymy from '../images/ymy.png';

class RecentWork extends Component {
	render(){
		return (
			<div className="container py-5">
				<div className="row mx-0 mx-lg-5">
					<div className="col-12 text-center text-md-left pl-0 py-3">
						<h2 class="work-header text-uppercase">Recent Work</h2>
					</div>
				</div>
				<div className="row work-border py-5 mb-5 mx-0 mx-lg-5">
					<div className="col-12 col-md-6">
					 	<img className="work-img img-fluid" src={Semihandmade} alt="semihandmade"/>
					</div>
					<div className="col-12 col-md-6 pt-5 pt-md-0">
						<h3 className="text-left text-uppercase position-header">Front End Development + Design</h3>
						<h2 className="text-left work-title">Semihandmade</h2>
						<p className="text-left m-0 work-paragraph">Developed and implemented front end features for Semihandmade, a Shopify Plus client that makes custom doors for Ikea kitchen cabinets, bathroom, media and storage systems.</p>

					</div>
				</div>
				<div className="row work-border py-5 mb-5 mx-0 mx-lg-5">
					<div className="col-12 col-md-6">
						<img className="work-img img-fluid" src={Laloop} alt="laloop"/>
					</div>
					<div className="col-12 col-md-6 pt-5 pt-md-0">
						<h3 className="text-left text-uppercase position-header">Front End Development + Design</h3>
						<h2 className="text-left work-title">La Loop</h2>
						<p className="text-left m-0 work-paragraph">Developed and implemented front end features for La Loop, a Shopify client that creates and designs eyewear accessories for users. </p>
					</div>
				</div>
				<div className="row work-border py-5 mb-5 mx-0 mx-lg-5">
					<div className="col-12 col-md-6">
						<img className="work-img img-fluid" src={Ymy} alt="ymy"/>
					</div>
					<div className="col-12 col-md-6 pt-5 pt-md-0">
						<h3 className="text-left text-uppercase position-header">Front End Development + Design</h3>
						<h2 className="text-left work-title">Yamamotoyama</h2>
						<p className="text-left m-0 work-paragraph">Developed and implemented front end features for Yamamotoyama USA, a Shopify client that specializes in providing the finest teas and nori all over the world.</p>
					</div>
				</div>
				<div className="row work-border py-5 mb-5 mx-0 mx-lg-5">
					<div className="col-12 col-md-6">
						<img className="work-img img-fluid" src={Singnasium} alt="singnasium"/>
					</div>
					<div className="col-12 col-md-6 pt-5 pt-md-0">
						<h3 className="text-left text-uppercase position-header">Front End Development + Design</h3>
						<h2 className="text-left work-title">Singnasium</h2>
						<p className="text-left m-0 work-paragraph">Developed and implemented front end features for Singnasium, a Shopify client that provides safe, non judgmental place for NYC artists and singers to explore their creative selves.</p>
					</div>
				</div>
			</div>
		)

	}

}

export default RecentWork;