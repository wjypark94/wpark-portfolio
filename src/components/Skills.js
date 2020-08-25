import React, { Component } from 'react';
import '../componentStyles/Skills.css';

import javascriptIcon from '../images/javascript-icon.png';
import jqueryIcon from '../images/jquery-icon.png';
import reactIcon from '../images/react-icon.png';
import htmlIcon from '../images/html-icon.png';
import cssIcon from '../images/css-icon.png';
import bootstrapIcon from '../images/bootstrap-icon.png';
import nodeIcon from '../images/node-icon.png';
import expressIcon from '../images/express-icon.png';
import mongoIcon from '../images/mongo-icon.png';
import liquidIcon from '../images/liquid-icon.png';
import gitIcon from '../images/git-icon.png';
import passportIcon from '../images/passport-icon.png';


class Skills extends Component {
	render(){
		return (
			<div className="container py-5">
				<div className="row mx-0 mx-lg-5">
					<div className="col-12 text-center text-md-left pl-0 py-5">
						<h2 className="skills-header text-uppercase">Skills</h2>
					</div>
				</div>

				<div className="row mx-0 mx-lg-5">
					<div className="col-6 col-lg-3 p-3 p-lg-5 skills-border-right skills-border-bottom">
						<img className="icon-img img-fluid" src={javascriptIcon} alt="javascript-icon"/>
						<h2 className="pt-3 skills-title">JavaScript</h2>
					</div>
					<div className="col-6 col-lg-3 p-3 p-lg-5 skills-border-right skills-border-bottom">
						<img className="icon-img img-fluid" src={reactIcon} alt="react-icon"/>
						<h2 className="pt-3 skills-title">React.js</h2>
					</div>
					<div className="col-6 col-lg-3 p-3 p-lg-5 skills-border-right skills-border-bottom">
						<img className="icon-img img-fluid" src={htmlIcon} alt="html-icon"/>
						 <h2 className="pt-3 skills-title">HTML5</h2>
					</div>
					<div className="col-6 col-lg-3 p-3 p-lg-5 skills-border-bottom">
						<img className="icon-img img-fluid" src={cssIcon} alt="css-icon"/>
						<h2 className="pt-3 skills-title">CSS3</h2>
					</div>
					<div className="col-6 col-lg-3 p-3 p-lg-5 skills-border-right skills-border-bottom">
						<img className="icon-img img-fluid" src={jqueryIcon} alt="jquery-icon"/>
						<h2 className="pt-3 skills-title">jQuery</h2>
					</div>
					<div className="col-6 col-lg-3 p-3 p-lg-5 skills-border-right skills-border-bottom">
						<img className="icon-img img-fluid" src={bootstrapIcon} alt="bootstrap-icon"/>
						<h2 className="pt-3 skills-title">Bootstrap</h2>
					</div>
					<div className="col-6 col-lg-3 p-3 p-lg-5 skills-border-right skills-border-bottom">
						<img className="icon-img img-fluid" src={nodeIcon} alt="node-icon"/>
						<h2 className="pt-3 skills-title">Node.js</h2>
					</div>
					<div className="col-6 col-lg-3 p-3 p-lg-5 skills-border-bottom">
						<img className="icon-img img-fluid" src={expressIcon} alt="express-icon"/>
						<h2 className="pt-3 skills-title">Express</h2>
					</div>
					<div className="col-6 col-lg-3 p-3 p-lg-5 skills-border-right skills-border-bottom">
						<img className="icon-img img-fluid" src={mongoIcon} alt="mongo-icon"/>
						<h2 className="pt-3 skills-title">Mongo</h2>
					</div>
					<div className="col-6 col-lg-3 p-3 p-lg-5 skills-border-right skills-border-bottom">
						<img className="icon-img img-fluid" src={liquidIcon} alt="liquid-icon"/>
						<h2 className="pt-3 skills-title">Liquid</h2>
					</div>
					<div className="col-6 col-lg-3 p-3 p-lg-5 skills-border-right skills-border-bottom">
						<img className="icon-img img-fluid" src={gitIcon} alt="git-icon"/>
						<h2 className="pt-3 skills-title">Git</h2>
					</div>
					<div className="col-6 col-lg-3 p-3 p-lg-5 skills-border-bottom">
						<img className="icon-img img-fluid" src={passportIcon} alt="passport-icon"/>
						<h2 className="pt-3 skills-title">Passport.js</h2>
					</div> 




				</div>
			
			</div>
		)
	}
}

export default Skills;