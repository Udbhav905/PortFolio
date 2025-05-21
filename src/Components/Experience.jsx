import React, { useEffect, useState } from "react";
import styles from "../Styles/Experience.module.css";
import { useInView } from "react-intersection-observer";

import AnimatedSection from "./AnimatedSection";

const Experience = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);
  const { ref: skillsRef, inView: skillsInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const experiences = [
    {
      company: "Groovy Technoweb Pvt. Ltd.",
      role: "Web Developer Intern",
      duration: "2 December 2024 - 30 March 2025",
      description:
        "Worked as a Frontend Developer Intern, gaining hands-on experience in building responsive web interfaces using modern JavaScript libraries and frameworks.",
      skills: ["HTML", "CSS", "JavaScript", "React"],
    },
  ];

  const skills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 80 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 75 },
  ];

  const skillDescriptions = {
    HTML: "Markup language for creating web pages.",
    CSS: "Stylesheet language for web design.",
    JavaScript: "Programming language for dynamic behavior.",
    React: "Library for building user interfaces.",
  };

  return (
    <AnimatedSection>
      <section className={styles.experienceSection}>
        <h2 className={styles.sectionTitle}>Experience & Skills</h2>
        <div className={styles.experienceSkillsWrapper}>
          <div className={styles.experienceContainer}>
            {experiences.map((exp, index) => (
              <div className={styles.experienceCard} key={index}>
                <div className={styles.experienceHeader}>
                  <h3 className={styles.company}>{exp.company}</h3>
                  <p className={styles.duration}>{exp.duration}</p>
                </div>
                <p className={styles.role}>{exp.role}</p>
                <p className={styles.description}>{exp.description}</p>
                <div className={styles.skills}>
                  {exp.skills.map((skill, i) => (
                    <span className={styles.skillTag} key={i}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <section className={styles.skillsSection} ref={skillsRef}>
            <h2 className={styles.sectionTitle}>Skills</h2>
            <div className={`row ${styles.skillsContainer}`}>
              {skills.map((skill, index) => (
                <div key={index} className={`col-md-6 ${styles.skillItem}`}>
                  <div className={styles.skillInfo}>
                    <span
                      className={styles.skillName}
                      data-tooltip={`Skilled in ${skill.name}`}
                    >
                      {skill.name}
                    </span>
                    <span className={styles.skillPercent}>{skill.level}%</span>
                  </div>
                  <div className={styles.progress}>
                    <div
                      className={styles.customProgressBar}
                      style={{ width: skillsInView ? `${skill.level}%` : "0%" }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Experience;
