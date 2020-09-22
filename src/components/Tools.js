import React, { Component } from 'react';

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

import githubIcon from '../images/github-icon.png';
import npmIcon from '../images/npm-icon.png';
import babelIcon from '../images/babel-icon.png';
import webpackIcon from '../images/webpack-icon.png';
import vscodeIcon from '../images/vscode-icon.png';
import slackIcon from '../images/slack-icon.png';
import asanaIcon from '../images/asana-icon.png';
import mochaIcon from '../images/mocha-icon.png';
import chaiIcon from '../images/chai-icon.png';
import netlifyIcon from '../images/netlify-icon.png';
import herokuIcon from '../images/heroku-icon.png';
import responsiveIcon from '../images/responsive-icon.png';
import Fade from 'react-reveal/Fade';
import '../componentStyles/Tools.scss';

class Tools extends Component {
	render(){
		return (
			<section className="tools-section">
				<div className="container py-3 py-lg-5">
					<div className="row mx-0 mx-lg-5">
						<div className="col-12 text-center text-md-left pl-0 py-5">
							<h2 className="skills-header text-uppercase">		
								<Fade top>Tools</Fade>
							</h2>
						</div>
					</div>

					<div className="row mx-0 mx-lg-5 pb-5">
						<Fade top>
						<div className="col-6 col-lg-3 p-3 skills-border-right skills-border-bottom">
							<img className="icon-img img-fluid mt-lg-3" src={githubIcon} alt="github-icon"/>
							<h2 className="py-3 skills-title">Github</h2>
						</div>
						<div className="col-6 col-lg-3 p-3 skills-border-right skills-border-bottom">
							<img className="icon-img img-fluid mt-lg-3" src={npmIcon} alt="npm-icon"/>
							<h2 className="py-3 skills-title">NPM</h2>
						</div>
						<div className="col-6 col-lg-3 p-3 skills-border-right skills-border-bottom">
							<img className="icon-img img-fluid mt-lg-3" src={babelIcon} alt="babel-icon"/>
							<h2 className="py-3 skills-title">Babel</h2>
						</div>
						<div className="col-6 col-lg-3 p-3 skills-border-bottom">
							<img className="icon-img img-fluid mt-lg-3" src={webpackIcon} alt="webpack-icon"/>
							<h2 className="py-3 skills-title">Webpack</h2>
						</div>
						<div className="col-6 col-lg-3 p-3 skills-border-right skills-border-bottom">
							<img className="icon-img img-fluid mt-lg-3" src={vscodeIcon} alt="vscode-icon"/>
							<h2 className="py-3 skills-title">VS Code</h2>
						</div>
						<div className="col-6 col-lg-3 p-3 skills-border-right skills-border-bottom">
							<img className="icon-img img-fluid mt-lg-3" src={slackIcon} alt="slack-icon"/>
							<h2 className="py-3 skills-title">Slack</h2>
						</div>
						<div className="col-6 col-lg-3 p-3 skills-border-right skills-border-bottom">
							<img className="icon-img img-fluid mt-lg-3" src={asanaIcon} alt="asana-icon"/>
							<h2 className="py-3 skills-title">Asana</h2>
						</div>
						<div className="col-6 col-lg-3 p-3 skills-border-bottom">
							<img className="icon-img img-fluid mt-lg-3" src={mochaIcon} alt="mocha-icon"/>
							<h2 className="py-3 skills-title">Mocha</h2>
						</div>
						<div className="col-6 col-lg-3 p-3 skills-border-right">
							<img className="icon-img img-fluid mt-lg-3" src={chaiIcon} alt="chai-icon"/>
							<h2 className="py-3 skills-title">Chai</h2>
						</div>
						<div className="col-6 col-lg-3 p-3 skills-border-right">
							<img className="icon-img img-fluid mt-lg-3" src={netlifyIcon} alt="netlify-icon"/>
							<h2 className="py-3 skills-title">Netlify</h2>
						</div>
						<div className="col-6 col-lg-3 p-3 skills-border-right">
							<img className="icon-img img-fluid mt-lg-3" src={herokuIcon} alt="heroku-icon"/>
							<h2 className="py-3 skills-title">Heroku</h2>
						</div>
						<div className="col-6 col-lg-3 p-3">
							<img className="icon-img img-fluid mt-lg-3" src={responsiveIcon} alt="responsive-icon"/>
							<h2 className="py-3 skills-title">Responsive Design</h2>
						</div> 

						</Fade>


					</div>
				
				</div>
			</section>
		)
	}
}

export default Tools;