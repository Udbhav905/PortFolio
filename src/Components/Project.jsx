import React from 'react';
import styles from '../Styles/Project.module.css';
import AnimatedSection from './AnimatedSection';

const projects = [
  {
    title: "Food Ordering System",
    description: "A full-stack MERN app where users can browse menus, add to cart, and place orders in real-time.",
    image: "./Foof_orderSS.png",
    link: "https://web-foodies.vercel.app/"
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React and CSS Modules to showcase my skills and projects.",
    image: "/Portfolio_img.png",
    link: "https://port-folio-five-amber.vercel.app/"
  },
  {
    title: "Weather App",
    description: "React app that fetches real-time weather data using OpenWeather API.",
    image: "/weather_app.png",
    link: "https://weather-app-ecru-zeta-86.vercel.app/"
  }
];

const Projects = () => {

  return (
    <AnimatedSection>
    <section className={styles.projectsSection} id="projects">
      <h2 className={styles.heading}>My Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <img src={project.image} alt={project.title} className={styles.projectImage} />
            <div className={styles.projectContent}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
    </AnimatedSection>
  );
};

export default Projects;
