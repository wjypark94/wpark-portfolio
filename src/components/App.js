import React from 'react';
import '../componentStyles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import Header from './Header';
import RecentWork from './RecentWork';

function App() {
  return (
    <div className="App">
		<NavBar/>
		<Header/>
		<RecentWork/>

    </div>
  );
}

export default App;
