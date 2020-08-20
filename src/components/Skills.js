import React, { Component } from 'react';
import '../componentStyles/Skills.css';

import Jqueryicon from '../images/jquery-icon.png';

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
					<div className="col-6 col-lg-3 p-5 skills-border">
						<span className="icon">
							<i class="fab fa-js-square"></i>
						</span>
						<h2 className="pt-3">JavaScript</h2>
					</div>
					<div className="col-6 col-lg-3 p-5 skills-border">
						<span className="icon">
							<i class="fab fa-react"></i>
						</span>
						<h2 className="pt-3">React.js</h2>
					</div>
					<div className="col-6 col-lg-3 p-5 skills-border">
						<span className="icon">
							<i class="fab fa-html5"></i>
						</span>
						 <h2 className="pt-3">HTLM5</h2>
					</div>

					<div className="col-6 col-lg-3 p-5 skills-border">
						<span className="icon">
							<i class="fab fa-css3-alt"></i>
						</span>
						<h2 className="pt-3">CSS3</h2>
					</div>

					<div className="col-6 col-lg-3 p-5 skills-border">
						<span className="icon">
							<img className="icon-img img-fluid" src={Jqueryicon} alt="jquery-icon"/>
						</span>
						<h2 className="pt-3">jQuery</h2>
					</div>
					<div className="col-6 col-lg-3 p-5 skills-border">
						<span className="icon">
							<i class="fab fa-bootstrap"></i>
						</span>
						<h2 className="pt-3">Bootstrap</h2>
					</div>
					<div className="col-6 col-lg-3 p-5 skills-border">
						<span className="icon">
							<i class="fab fa-node-js"></i>
						</span>
						<h2 className="pt-3">Node.js</h2>
					</div>

					<div className="col-6 col-lg-3 p-5 skills-border">
						<span className="icon">

						</span>
						<h2 className="pt-3">Express</h2>
					</div>

					

					<div className="col-6 col-lg-3 p-5 skills-border">
						<span className="icon">
							
						</span>
						<h2 className="pt-3">Mongo</h2>
					</div>
					<div className="col-6 col-lg-3 p-5 skills-border">
						<span className="icon">
							
						</span>
						<h2 className="pt-3">Liquid</h2>
					</div>
					<div className="col-6 col-lg-3 p-5 skills-border">
						<span className="icon">
							<i class="fab fa-git-square"></i>
						</span>
						<h2 className="pt-3">Git</h2>
					</div>
					<div className="col-6 col-lg-3 p-5 skills-border">
						<span className="icon">
							
						</span>
						<h2 className="pt-3">Passport.js</h2>
					</div> 




				</div>
			
			</div>
		)
	}
}

export default Skills;