
import React, { useState } from 'react';
import styles from '../Styles/Certificates.module.css';
import AnimatedSection from './AnimatedSection';
import DisplayCertificate from '../Components/DisplayCertificate'; 

const reactcerty = '/reactcerty.png';
const jscerty = '/javascriptcerti.png';
const csscerty = '/csscerty.png';

const certificateData = [
  {
    title: 'React - Redux Certificate',
    issuer: 'KG Coding (Youtube)',
    date: 'May 2025',
    image: reactcerty,
  },
  {
    title: 'JavaScript Certificate',
    issuer: 'OneRoadMap',
    date: 'May 2025',
    image: jscerty,
  },
  {
    title: 'CSS Certificate',
    issuer: 'OneRoadMap',
    date: 'May 2025',
    image: csscerty,
  },
];

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const handleClick = (cert) => {
   
    setSelectedCert(cert); 
  };

  return (
    <>
      <AnimatedSection>
        <section className={styles.certificateSection} id="certificates">
          <h2 className={styles.title}>Certificates</h2>
          <div className={styles.grid}>
            {certificateData.map((cert, index) => (
              <div className={styles.card} key={index}>
                <h3>{cert.title}</h3>
                <p><strong>Issuer:</strong> {cert.issuer}</p>
                <p><strong>Date:</strong> {cert.date}</p>
                <button
                  className={styles.viewButton}
                  onClick={() => handleClick(cert)} 
                >
                  View Certificate 
                </button>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {selectedCert && (
        <DisplayCertificate
          certificate={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </>
  );
};

export default Certificates;
