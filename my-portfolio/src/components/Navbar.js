// Navbar.js
import React from 'react';
import styles from './styles/Navbar.module.css';

const Navbar = () => {
  // Smooth scrolling function
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <nav className={styles.navbar}>
      <div><a href="#home" onClick={() => scrollTo('home')}>Yskak's Website</a></div>
      <div>
        <a href="#about" onClick={() => scrollTo('about')}>About</a>
        <a href="#cv" onClick={() => scrollTo('cv')}>CV</a>
        <a href="#experience" onClick={() => scrollTo('experience')}>Experience</a>
        <a href="#academics" onClick={() => scrollTo('academics')}>Academics</a>
      </div>
    </nav>
  );
};

export default Navbar;
