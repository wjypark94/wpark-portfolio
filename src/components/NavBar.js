import React, { Component } from 'react';
import '../componentStyles/NavBar.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Scroll from "react-scroll";



class NavBar extends Component {
	render(){
		let Link = Scroll.Link;
		return (
			<div className="container-fluid px-0">
					<Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
						<Navbar.Brand href="/">WP</Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav">
							<Nav className="ml-auto">
								<Nav.Link href="#work" className="text-uppercase">Work</Nav.Link>
								<Nav.Link href="/about" className="text-uppercase">About</Nav.Link>
								<Nav.Link href="https://drive.google.com/file/d/1fDTHifZDmA5G6ltCooWCJCysNwXwQR0M/view?usp=sharing" target="_blank" className="text-uppercase">Resume</Nav.Link>
							</Nav>
						</Navbar.Collapse>
					</Navbar>
			</div>
		)
	}
}

export default NavBar;