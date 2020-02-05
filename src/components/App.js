import React from 'react';
import '../componentStyles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import Header from './Header';
import RecentWork from './RecentWork';
import PastProjects from './PastProjects';

function App() {
  return (
    <div className="App">
		<NavBar/>
		<Header/>
		<RecentWork/>
		<PastProjects/>

    </div>
  );
}

export default App;
