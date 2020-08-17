import React, { Component } from 'react';

class Skills extends Component {
	render(){
		return (
			<div className="container py-5">
				<div className="row mx-0 mx-lg-5">
					<div className="col-12 text-center text-md-left pl-0">
						<h2 className="skills-header text-uppercasec">Skills</h2>
					</div>
				</div>

				<div className="row mx-0 mx-lg-5">
					<div className="col-6 col-lg-3">
						<span className="icon">
							<i class="fab fa-js-square"></i>
						</span>
						<h2>JavaScript</h2>
					</div>
					<div className="col-6 col-lg-3">
						<span className="icon">
							<i class="fab fa-react"></i>
						</span>
						<h2>React.js</h2>
					</div>
					<div className="col-6 col-lg-3">
						<span className="icon">
							<i class="fab fa-html5"></i>
						</span>
						 <h2>HTLM5</h2>
					</div>

					<div className="col-6 col-lg-3">
						<span className="icon">
							<i class="fab fa-css3-alt"></i>
						</span>
						<h2>CSS3</h2>
					</div>
					{/* <div className="col-6 col-lg-3">
						<span className="icon">
							
						</span>

					</div>
					<div className="col-6 col-lg-3">
						<span className="icon">
							
						</span>

					</div>
					<div className="col-6 col-lg-3">
						<span className="icon">
							
						</span>

					</div> */}

				</div>
			
			</div>
		)
	}
}

export default Skills;