import React, { Component } from 'react';
import '../componentStyles/PastProjects.css';

class PastProjects extends Component{
	render(){
		return (
			<div className="container">
				<div className="row mx-0 mx-lg-5">
					<div className="col-12 text-center text-md-left pl-0 py-3">
						<h2 class="work-header text-uppercase">Past Projects</h2>
					</div>
				</div>

				<div class="row mx-0 mx-lg-5 mb-5">
					<div class="col-6">
						<div class="row work-border">
							<div class="col-12">
								App
							</div>
							<div class="col-12">
								App description
							</div>
						</div>
					</div>
					<div class="col-6">
						<div class="row work-border">
							<div class="col-12">
								App
							</div>
							<div class="col-12">
								App description
							</div>
						</div>
					</div>
					
				</div>
			</div>
		)
	}
}

export default PastProjects;
