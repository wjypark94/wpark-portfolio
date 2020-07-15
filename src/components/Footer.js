import React, { Component } from 'react';

class Footer extends Component{
	render(){
		return (
			<div class="container">
				<div class="row mx-0 mx-lg-5">
					<div class="col-12 text-center pl-0 py-3">
						<h2>Contact</h2>
						<p>Learn more <a href="/about">about me</a> or connect with me below!</p>
						<a class="px-3" href="mailto:wjypark94@gmail.com"><i class="icon fa fa-envelope"></i></a>
						<a class="px-3" href="https://github.com/wjypark94"><i class="icon fa fa-github-alt"></i></a>
						<a class="px-3" href="https://www.linkedin.com/in/wjypark"><i class="icon fa fa-linkedin"></i></a>
					</div>

				</div>
				
			</div>
		)
	}
}


export default Footer;