import React, { Component } from 'react';
import '../componentStyles/NavBar.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';




class NavBar extends Component {
	render(){
		return (
			<div className="container-fluid px-0">
				<Fade top>
					<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
						<Navbar.Brand href="#home">WP</Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="ml-auto">
								<Nav.Link href="#work">Work</Nav.Link>
								<Nav.Link href="#about">About</Nav.Link>
								<Nav.Link href="#resume">Resume</Nav.Link>
								<Nav.Link href="#contact">Contact</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Navbar>
				</Fade>
			</div>
		)
	}
}

export default NavBar;