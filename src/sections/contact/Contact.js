import React from 'react';
import styles from './Contact.module.scss';
import Image from 'next/image';
import Socials from '../../components/socials/Socials';
import TopDivider from '../../../public/images/contact_divider-top.svg';

const Contact = () => {
  return (
    <div
      className={`${styles['section__container']} app__flex app__fullscreen`}
      id="contact"
    >
      <div className={styles['section__divider-top']}>
        <Image
          src={TopDivider}
          alt="projects-divider-top"
          fill
        />
      </div>

      <div className='app__section'>
        <div className={styles['contact-container']}>
          <div className={styles['contact__heading-wrapper']}>
            <h1>Let&apos;s get in touch!</h1>
            <p>Feel free to contact me at any of the following channels:</p>
          </div>
          <Socials
            wrapperClassName={styles['contact__socials-wrapper']}
            itemClassName={styles['contact__socials-item']}
            headingClassName={styles['contact__socials-heading']}
            iconSize={32}
            headings
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
