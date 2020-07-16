import React, { Component } from 'react';

class Footer extends Component{
	render(){
		return (
			<div class="container py-3 py-lg-5">
				<div class="row mx-0 mx-lg-5">
					<div class="col-12 text-center text-md-left pl-0 py-3">
						<h2 class="contact-header text-uppercase">Contact</h2>
					</div>
					<div class="col-12 text-center">
						<h3>Let's connect!</h3>
						<p class="m-0">Learn more <a href="/about">about me</a> or feel free to reach out to chat!</p>
						<p class="m-0">Living, learning, and leveling up one day at a time.</p>
					</div>
					<div class="col-12">
						<a class="px-3" href="mailto:wjypark94@gmail.com"><i class="icon fa fa-envelope"></i></a>
						<a class="px-3" href="https://github.com/wjypark94"><i class="icon fa fa-github-alt"></i></a>
						<a class="px-3" href="https://www.linkedin.com/in/wjypark"><i class="icon fa fa-linkedin"></i></a>
						<p>2020 William Park</p>
					</div>

				</div>
				
			</div>
		)
	}
}


export default Footer;