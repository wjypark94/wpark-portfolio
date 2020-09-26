import React, { Component } from 'react';
import '../componentStyles/NavBar.scss';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Scroll from "react-scroll";



class NavBar extends Component {
	state = {
		color: 'white'
	}

	listenScrollEvent = e => {
		if (window.scrollY) {
			this.setState({color: '#f8f9fa'})
		} else {
			this.setState({color: 'white'})
		}
	}

	componentDidMount(){
		window.addEventListener('scroll', this.listenScrollEvent)
	}

	render(){
		let Link = Scroll.Link;
		return (
			<div className="container-fluid px-0">
					<Navbar collapseOnSelect expand="lg" variant="light" fixed="top" className="active" style={{background: this.state.color}}>
					
						<Navbar.Brand href="/"><Fade top>WP</Fade></Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="ml-auto">
								<Fade top>
								<Nav.Link href="/#work" className="text-uppercase">Work</Nav.Link>
								<Nav.Link href="/about" className="text-uppercase">About</Nav.Link>
								<Nav.Link href="https://drive.google.com/file/d/1fDTHifZDmA5G6ltCooWCJCysNwXwQR0M/view?usp=sharing" target="_blank" className="text-uppercase">Resume</Nav.Link>
								</Fade>
							</Nav>
						</Navbar.Collapse>
					</Navbar>
			</div>
		)
	}
}

export default NavBar;