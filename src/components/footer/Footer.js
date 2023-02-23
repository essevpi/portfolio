import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.scss';
import Socials from '../socials/Socials';

const socials = [
  {
    name: 'GitHub',
    iconPath: '/icons/github.svg',
    url: 'https://github.com/essevpi',
  },
  {
    name: 'LinkedIn',
    iconPath: '/icons/linkedin.svg',
    url: '/',
  },
];

const Footer = () => {
  return (
    <div className={`${styles['footer__container']} app__flex`}>
      <footer className={`${styles['footer__wrapper']} app__section`}>
        <div className={styles['footer__heading']}>
          <p>Made with 💜 by me</p>
          <span>&#169; Simone Pili</span>
        </div>
        <Socials
          wrapperClassName={styles['footer__socials-wrapper']}
          itemClassName={styles['footer__socials-item']}
          iconSize={32}
        />
      </footer>
    </div>
  );
};

export default Footer;
