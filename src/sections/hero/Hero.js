import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import TypewriterComponent from 'typewriter-effect';

import styles from './Hero.module.scss';
import Socials from '../../components/socials/Socials';

const heroVariants = {
  offscreen: {
    y: '50%',
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.5,
      duration: 1,
    },
  },
};

const typewriterOptions = {
  strings: ['Front-End Developer', 'Technology enthusiast', 'Some other thing'],
  autoStart: true,
  loop: true,
  wrapperClassName: `${styles.typewriter__wrapper}`,
  cursorClassName: `${styles.typewriter__cursor}`,
};

const Hero = () => {
  return (
    <div
      className={`${styles['section__container']} app__flex app__fullscreen`}
      id='hero'
    >
      {/* top divider */}
      <div className={styles['section__divider-top']}>
        <Image
          src='/images/hero_divider-top.svg'
          alt='hero-divider-top'
          layout='fill'
        />
      </div>

      <motion.div
        className={`${styles['hero__container']} app__section`}
        variants={heroVariants}
        initial='offscreen'
        whileInView='onscreen'
        viewport={{ once: false, amount: 0.1 }}
      >
        <div className={styles['hero__container-wrapper']}>
          <div className={styles['hero__container-heading-wrapper']}>
            <h1 className={styles['hero__container-heading-title']}>
              Hello there, I&apos;m{' '}
              <span className={styles['hero__highlighted']}>Simone</span>{' '}
              <span className={styles['wave__emoji']}>✋🏽</span>
            </h1>
            <TypewriterComponent options={typewriterOptions} />
            <div className={styles['hero__actions-wrapper']}>
              <Link href='#contact' passHref legacyBehavior>
                <button
                  className={`${styles['hero__action-btn']} ${styles['hero__cta-btn']}`}
                >
                  Contact
                </button>
              </Link>
              <Link href='/files/CV_v1.pdf' passHref legacyBehavior>
                {/* <a href='/files/CV_v1.pdf' download> */}
                <button
                  className={`${styles['hero__action-btn']} ${styles['hero__secondary-btn']}`}
                >
                  View CV
                </button>
              </Link>
            </div>
            <div className={styles['hero__container-heading-pic']} />
          </div>
          <div className={styles['hero__container-info-wrapper']}>
            <div className={styles['hero__position-wrapper']}>
              <Image
                src='/icons/map_pinpoint.svg'
                alt='map-pinpoint'
                width={16}
                height={16}
              />
              <Link href='https://www.google.it/maps/place/20099+Sesto+San+Giovanni+MI/@45.5369608,9.2427489,14z/' legacyBehavior>
                45&deg;32&apos;25&quot;08 N, 09&deg;14&apos;34&quot;08 E
              </Link>
            </div>
            <Socials
              wrapperClassName={styles['hero__socials-wrapper']}
              itemClassName={styles['hero__socials-item']}
              iconSize={32}
            />
          </div>
        </div>
      </motion.div>

      {/* bottom divider */}
      <div className={styles['section__divider-bottom']}>
        <Image
          src='/images/hero_divider-bottom.svg'
          alt='hero-divider-bottom'
          layout='fill'
        />
      </div>
    </div>
  );
};

export default Hero;
