import React from 'react';
import '../componentStyles/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import Header from './Header';
import RecentWork from './RecentWork';
import PastProjects from './PastProjects';
import Skills from './Skills';
import Tools from './Tools';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
		<NavBar/>
		<Router>
			<Switch>
				<Route exact path ="/">
					<Header/>
					<Skills/>
					<Tools/>
					<RecentWork/>
					<PastProjects/>
					<Footer/>
				</Route>
				<Route exact path ="/about">
					<About/>
					<Footer/>
				</Route>
				<Route exact path = "/contact">
					<Contact/>
				</Route>
			</Switch>
		</Router>





    </div>
  );
}

export default App;
