import React, { Component } from 'react';
import '../componentStyles/Skills.scss';

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
import Fade from 'react-reveal/Fade';


class Skills extends Component {
	render(){
		return (
			<section className="skills-section">
				<div className="container py-3 py-lg-5">
					<div className="row mx-0 mx-lg-5">
						<div className="col-12 text-center text-md-left pl-0 py-5">
							<h2 className="skills-header text-uppercase">
								<Fade top>Skills</Fade>
							</h2>
						</div>
					</div>

					<div className="row mx-0 mx-lg-5 pb-5">
						<Fade top>
						<div className="col-6 col-lg-3 p-3 skills-border-right skills-border-bottom">
							<img className="icon-img img-fluid mt-lg-3" src={javascriptIcon} alt="javascript-icon"/>
							<h2 className="py-3 skills-title">JavaScript</h2>
						</div>
						<div className="col-6 col-lg-3 p-3 skills-border-right skills-border-bottom">
							<img className="icon-img img-fluid mt-lg-3" src={reactIcon} alt="react-icon"/>
							<h2 className="py-3 skills-title">React.js</h2>
						</div>
						<div className="col-6 col-lg-3 p-3 skills-border-right skills-border-bottom">
							<img className="icon-img img-fluid mt-lg-3" src={htmlIcon} alt="html-icon"/>
							<h2 className="py-3 skills-title">HTML5</h2>
						</div>
						<div className="col-6 col-lg-3 p-3 skills-border-bottom">
							<img className="icon-img img-fluid mt-lg-3" src={cssIcon} alt="css-icon"/>
							<h2 className="py-3 skills-title">CSS3</h2>
						</div>
						<div className="col-6 col-lg-3 p-3 skills-border-right skills-border-bottom">
							<img className="icon-img img-fluid mt-lg-3" src={jqueryIcon} alt="jquery-icon"/>
							<h2 className="py-3 skills-title">jQuery</h2>
						</div>
						<div className="col-6 col-lg-3 p-3 skills-border-right skills-border-bottom">
							<img className="icon-img img-fluid mt-lg-3" src={bootstrapIcon} alt="bootstrap-icon"/>
							<h2 className="py-3 skills-title">Bootstrap</h2>
						</div>
						<div className="col-6 col-lg-3 p-3 skills-border-right skills-border-bottom">
							<img className="icon-img img-fluid mt-lg-3" src={nodeIcon} alt="node-icon"/>
							<h2 className="py-3 skills-title">Node.js</h2>
						</div>
						<div className="col-6 col-lg-3 p-3 skills-border-bottom">
							<img className="icon-img img-fluid mt-lg-3" src={expressIcon} alt="express-icon"/>
							<h2 className="py-3 skills-title">Express</h2>
						</div>
						<div className="col-6 col-lg-3 p-3 skills-border-right">
							<img className="icon-img img-fluid mt-lg-3" src={mongoIcon} alt="mongo-icon"/>
							<h2 className="py-3 skills-title">Mongo</h2>
						</div>
						<div className="col-6 col-lg-3 p-3 skills-border-right">
							<img className="icon-img img-fluid mt-lg-3" src={liquidIcon} alt="liquid-icon"/>
							<h2 className="py-3 skills-title">Liquid</h2>
						</div>
						<div className="col-6 col-lg-3 p-3 skills-border-right">
							<img className="icon-img img-fluid mt-lg-3" src={gitIcon} alt="git-icon"/>
							<h2 className="py-3 skills-title">Git</h2>
						</div>
						<div className="col-6 col-lg-3 p-3">
							<img className="icon-img img-fluid mt-lg-3" src={passportIcon} alt="passport-icon"/>
							<h2 className="py-3 skills-title">Passport.js</h2>
						</div> 
						</Fade>
					</div>
				</div>
			</section>
		)
	}
}

export default Skills;