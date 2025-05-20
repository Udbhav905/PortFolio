import React, { useRef, useState } from 'react';
import styles from '../Styles/Contact.module.css';
import AnimatedSection from './AnimatedSection';
import emailjs from 'emailjs-com';
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const formRef = useRef();
  const [sent, setSent] = useState(false);

   const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(
        (result) => {
          console.log(result.text);
          setSent(true);
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <AnimatedSection>
    <section className={styles.contactSection} id="contact">
      <h2 className={styles.title}>Contact Me</h2>
      <form ref={formRef} onSubmit={sendEmail} className={styles.form}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <input type="tel" name="number" placeholder="Your Phone Number" required />
        <textarea name="message" placeholder="Your Message" required />
        <button type="submit">Connect</button>
        {sent && <p className={styles.success}>Message sent successfully!</p>}
      </form>
    </section>
    </AnimatedSection>
  );
};

export default Contact;
