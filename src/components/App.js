import React from 'react';
import '../componentStyles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import Header from './Header';

function App() {
  return (
    <div className="App">
		<NavBar/>
		<Header/>

    </div>
  );
}

export default App;
