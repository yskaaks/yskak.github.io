// In App.js
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Academics from './components/Academics';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <div className="mainContent">
        <Home />
        <About />
        <Experience />
        <Academics />
      </div>
    </div>
  );
}

export default App;
