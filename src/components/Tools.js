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

class Tools extends Component {
	render(){
		return (
			<div className="container">
				<div className="row mx-0 mx-lg-5">
					<div className="col-12 text-center text-md-left pl-0 py-5">
						<h2 className="skills-header text-uppercase">Tools</h2>
					</div>
				</div>

				<div className="row mx-0 mx-lg-5">
					<div className="col-6 col-lg-3 p-3 p-lg-5 skills-border-right skills-border-bottom">
						<img className="icon-img img-fluid" src={githubIcon} alt="github-icon"/>
						<h2 className="pt-3 skills-title">Github</h2>
					</div>
					<div className="col-6 col-lg-3 p-3 p-lg-5 skills-border-right skills-border-bottom">
						<img className="icon-img img-fluid" src={npmIcon} alt="npm-icon"/>
						<h2 className="pt-3 skills-title">NPM</h2>
					</div>
					<div className="col-6 col-lg-3 p-3 p-lg-5 skills-border-right skills-border-bottom">
						<img className="icon-img img-fluid" src={babelIcon} alt="babel-icon"/>
						 <h2 className="pt-3 skills-title">Babel</h2>
					</div>
					<div className="col-6 col-lg-3 p-3 p-lg-5 skills-border-bottom">
						<img className="icon-img img-fluid" src={webpackIcon} alt="webpack-icon"/>
						<h2 className="pt-3 skills-title">Webpack</h2>
					</div>
					<div className="col-6 col-lg-3 p-3 p-lg-5 skills-border-right skills-border-bottom">
						<img className="icon-img img-fluid" src={vscodeIcon} alt="vscode-icon"/>
						<h2 className="pt-3 skills-title">VS Code</h2>
					</div>
					<div className="col-6 col-lg-3 p-3 p-lg-5 skills-border-right skills-border-bottom">
						<img className="icon-img img-fluid" src={slackIcon} alt="slack-icon"/>
						<h2 className="pt-3 skills-title">Slack</h2>
					</div>
					<div className="col-6 col-lg-3 p-3 p-lg-5 skills-border-right skills-border-bottom">
						<img className="icon-img img-fluid" src={asanaIcon} alt="asana-icon"/>
						<h2 className="pt-3 skills-title">Asana</h2>
					</div>
					<div className="col-6 col-lg-3 p-3 p-lg-5 skills-border-bottom">
						<img className="icon-img img-fluid" src={mochaIcon} alt="mocha-icon"/>
						<h2 className="pt-3 skills-title">Mocha</h2>
					</div>
					<div className="col-6 col-lg-3 p-3 p-lg-5 skills-border-right skills-border-bottom">
						<img className="icon-img img-fluid" src={chaiIcon} alt="chai-icon"/>
						<h2 className="pt-3 skills-title">Chai</h2>
					</div>
					<div className="col-6 col-lg-3 p-3 p-lg-5 skills-border-right skills-border-bottom">
						<img className="icon-img img-fluid" src={netlifyIcon} alt="netlify-icon"/>
						<h2 className="pt-3 skills-title">Netlify</h2>
					</div>
					<div className="col-6 col-lg-3 p-3 p-lg-5 skills-border-right skills-border-bottom">
						<img className="icon-img img-fluid" src={herokuIcon} alt="heroku-icon"/>
						<h2 className="pt-3 skills-title">Heroku</h2>
					</div>
					<div className="col-6 col-lg-3 p-3 p-lg-5 skills-border-bottom">
						<img className="icon-img img-fluid" src={responsiveIcon} alt="responsive-icon"/>
						<h2 className="pt-3 skills-title">Responsive Design</h2>
					</div> 




				</div>
			
			</div>
		)
	}
}

export default Tools;