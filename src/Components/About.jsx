import React from "react";
import styles from "../Styles/About.module.css";
import AnimatedSection from "./AnimatedSection";

const About = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/UdbhavResumeNew.pdf";
    link.download = "/UdbhavResumeNew.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatedSection>
      <section className={styles.about_main} id="about">
        <div className={styles.aboutWrapper}>
          {/* <div className={styles.aboutImage}>
          <img src="/up.svg" alt="Profile" />
        </div> */}

          <div className={styles.aboutContent}>
            <h2 className={styles.sectionTitle}>About Me</h2>
            <p className={styles.aboutText}>
              I'm a creative developer passionate about building beautiful,
              responsive websites that provide intuitive user experiences. With
              expertise in modern frontend technologies, I bridge the gap
              between design and technical implementation.
            </p>

            <div className={styles.aboutDetails}>
              <div className={styles.detailItem}>
                <h3>Name:</h3>
                <p>Udbhav Prajapati</p>
              </div>
              <div className={styles.detailItem}>
                <h3>Email:</h3>

                <p>
                  Contact me at:{" "}
                  <a href="mailto:udbhavprajapati909@gmail.com">
                    udbhavprajapati909@gmail.com
                  </a>
                </p>
              </div>
              <div className={styles.detailItem}>
                <h3>Expertise:</h3>
                <p>Frontend Development</p>
              </div>
            </div>

            <button
              className={styles.ctaButton}
              onClick={() => {
                handleDownload();
              }}
            >
              Download Resume
            </button>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default About;
