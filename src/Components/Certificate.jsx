import React from 'react';
import styles from '../Styles/Certificates.module.css';
import AnimatedSection from './AnimatedSection';

const certificateData = [
  {
    title: 'React - Redux Certificate',
    issuer: 'KG Coding (Youtube )',
    date: 'May 2025',
    image: "./reactcerty.png",
    link: '',
  },
  {
    title: 'JavaScript Certificate',
    issuer: 'OneRoadMap',
    date: 'May 2025',
    image: "./javascriptcerti.png",
    link: '',
  },
  {
    title: 'CSS Certificate',
    issuer: 'OneRoadMap',
    date: 'May 2025',
    image: "./csscerty.png",
    link: '',
  },
];

const Certificates = () => {
  return (
    <AnimatedSection>
    <section className={styles.certificateSection} id="certificates">
      <h2 className={styles.title}>Certificates</h2>
      <div className={styles.grid}>
        {certificateData.map((cert, index) => (
          <div className={styles.card} key={index}>
            <h3>{cert.title}</h3>
            <p><strong>Issuer:</strong> {cert.issuer}</p>
            <p><strong>Date:</strong> {cert.date}</p>
            <a  target="_blank" rel="noopener noreferrer" onClick={()=>{}}>
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
   </AnimatedSection>
  );
};

export default Certificates;
