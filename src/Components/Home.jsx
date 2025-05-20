import React, { useState, useEffect } from 'react';
import styles from '../Styles/Home.module.css';
import AnimatedSection from './AnimatedSection';

const roles = [
  "FrontEnd Developer",
  "HTML Developer",
  "JavaScript Developer",
  "React Developer",
  "Web Developer"
];

const Home = () => {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let typingSpeed = isDeleting ? 50 : 100;
    let timeout;

    if (!isDeleting && charIndex < currentRole.length) {
      timeout = setTimeout(() => {
        setText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, typingSpeed);
    } else if (!isDeleting && charIndex === currentRole.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1000); // Pause before deleting
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <AnimatedSection >
    <div className={styles.Home_main}>
      <div className={styles.left}>
        <img src="./my_image.jpg" alt="Profile" />
      </div>
      <div className={styles.right}>
        <h4>Hi I am,</h4>
        <h1>Udbhav Prajapati</h1>
        <h4>
          I am <span className={styles.frontend}>{text}<span className={styles.cursor}>|</span></span>
        </h4>
        <p>
          I am a skilled and passionate web developer focused on turning ideas into interactive interfaces.
        </p>
      </div>
    </div>
    </AnimatedSection>
  );
};

export default Home;
