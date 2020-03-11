import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer.js';
import Home from './pages/Home.js';
import Carousel from './components/Carousel.js';

library.add(fab, faCheckSquare, faCoffee);

function App() {
  return (
    <div className="App">
	<Navbar/>
	<Carousel/>
	<Home/>
	<Footer/>
    </div>
  );
}

export default App;
