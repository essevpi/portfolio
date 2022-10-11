import React from 'react';
import styles from './Contact.module.scss';
import Image from 'next/image';
import ContactForm from '../../components/contact-form/ContactForm';

const Projects = () => {
  return (
    <div
      className={`${styles['section__container']} app__flex app__fullscreen`}
      id="contact"
    >
      <div className={styles['section__divider-top']}>
        <Image
          src="/images/projects_divider-top.svg"
          alt="projects-divider-top"
          layout="fill"
        />
      </div>

      <div className={`${styles['section__contact-container']} app__section`}>
        <ContactForm />
      </div>
    </div>
  );
};

export default Projects;
