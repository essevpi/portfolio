import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.scss';

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
    <footer className={styles['footer__container']}>
      <div className={styles['footer__heading']}>
        Made with 💜 by me myself and I
      </div>
      <div className={styles['footer__social-wrapper']}>
        {socials.map((social, i) => (
          <div className={styles['footer__social-item']} key={i}>
            <Link href={social.url} passHref>
              <a>
                <Image
                  src={social.iconPath}
                  alt={social.name}
                  height={32}
                  width={32}
                />
              </a>
            </Link>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
