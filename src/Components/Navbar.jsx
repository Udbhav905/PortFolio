import React, { useState, useEffect } from 'react';
import styles from '../Styles/Navbar.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const sections = ['Home', 'About', 'Experience', 'Projects', 'Certificates'];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [activeSection, setActiveSection] = useState('Home');
  let timeoutId = null;

  const toggleMenu = () => setIsOpen(!isOpen);

  // Scroll to section smoothly
  const handleClick = (section) => {
    setIsOpen(false);
    const el = document.getElementById(section.toLowerCase());
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Handle auto-hide/show navbar on inactivity
    const handleUserActivity = () => {
      setVisible(true);
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setVisible(false), 50);
    };

    // Handle active section detection on scroll
    const handleScroll = () => {
      handleUserActivity();

      const scrollPos = window.scrollY + window.innerHeight / 3;

      let currentSection = 'Home';
      for (let section of sections) {
        const el = document.getElementById(section.toLowerCase());
        if (el && el.offsetTop <= scrollPos) {
          currentSection = section;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleUserActivity);

    // Initial calls
    handleUserActivity();
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleUserActivity);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className={`${styles.Navbar} ${visible ? styles.visible : styles.hidden}`}>
      <div className={styles.logo}>
        <img src="public/up.svg" alt="UP Logo" />
      </div>

      <div className={styles.hamburger} onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div className={`${styles.navbar_detail} ${isOpen ? styles.open : ''}`}>
        <ul>
          {sections.map((section) => (
            <li
              key={section}
              className={activeSection === section ? styles.active : ''}
              onClick={() => handleClick(section)}
            >
              {section}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
