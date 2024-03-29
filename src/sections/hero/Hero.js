import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Socials from '../../components/socials/Socials';
import TypewriterComponent from 'typewriter-effect';
import TopDivider from '../../../public/images/hero_divider-top.svg';
import BottomDivider from '../../../public/images/hero_divider-bottom.svg';
import PinPointIcon from '../../../public/icons/map_pinpoint.svg';

import styles from './Hero.module.scss';

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
  strings: ['Front-End Developer', 'Technology Enthusiast', 'Detail Oriented'],
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
        <Image src={TopDivider} alt='hero-divider-top' fill />
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
              <span className='gradient-text'>Simone</span>{' '}
              <span className={styles['wave__emoji']}>✋🏽</span>
            </h1>
            <TypewriterComponent options={typewriterOptions} />
            <div className={styles['hero__actions-wrapper']}>
              <Link href='#projects' scroll={false} legacyBehavior>
                <button
                  className={`${styles['hero__action-btn']} ${styles['hero__secondary-btn']}`}
                >
                  Projects
                </button>
              </Link>
              <Link
                href='mailto:essevpi@gmail.com'
                scroll={false}
                passHref
                legacyBehavior
              >
                <button
                  className={`${styles['hero__action-btn']} ${styles['hero__cta-btn']}`}
                >
                  Contact
                </button>
              </Link>
            </div>
            <div className={styles['hero__container-heading-pic']} />
          </div>
          <div className={styles['hero__container-info-wrapper']}>
            <div className={styles['hero__position-wrapper']}>
              <Image
                src={PinPointIcon}
                alt='map-pinpoint'
                width={16}
                height={16}
              />
              <Link
                href='https://www.google.it/maps/place/20099+Sesto+San+Giovanni+MI/@45.5369608,9.2427489,14z/'
                legacyBehavior
              >
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
        <Image src={BottomDivider} alt='hero-divider-bottom' fill />
      </div>
    </div>
  );
};

export default Hero;
