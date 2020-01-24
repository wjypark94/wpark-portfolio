import React, { Component } from 'react';

class Header extends Component {
	render(){
		return (
			<div class="container-fluid px-0">
				<nav class="navbar navbar-expand-lg navbar-light bg-light">
					<a class="navbar-brand" href="#">WP</a>
					<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>

					<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
							<ul class="nav navbar-nav ml-auto">
								<li><a class="nav-item nav-link" href="#">Work</a></li>
								<li><a class="nav-item nav-link" href="#">About</a></li>
								<li><a class="nav-item nav-link" href="#">Skills</a></li>
								<li><a class="nav-item nav-link disabled" href="#">Contact</a></li>
							</ul>
						</div>
					</div>
					
				</nav>

			
			</div>
		)
	}
}

export default Header;