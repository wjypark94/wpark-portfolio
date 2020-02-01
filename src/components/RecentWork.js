import React, { Component } from 'react';
import '../componentStyles/RecentWork.css';

class RecentWork extends Component {
	render(){
		return (
			<div className="container">
				<div className="row">
					<div className="col-12 text-left pl-0 py-3">
						<h2>Recent Work</h2>
					</div>
				</div>
				<div className="row work-border py-5">
					<div className="col-6">
						Product
					</div>
					<div className="col-6">
						Product description
					</div>
				</div>
			</div>
		)

	}

}

export default RecentWork;