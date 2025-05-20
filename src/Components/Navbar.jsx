import React, { useState } from 'react';
import styles from '../Styles/Navbar.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className={styles.Navbar}>
      <div className={styles.logo}>
        <img src="public/up.svg" alt="UP Logo" />
      </div>

      <div className={styles.hamburger} onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className={`${styles.navbar_detail} ${isOpen ? styles.open : ''}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Experience</li>
          <li>Projects</li>
          <li>Certificates</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
