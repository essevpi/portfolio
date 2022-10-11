import React, { useState, useEffect } from 'react';
import styles from './Hero.module.scss';
import { motion } from 'framer-motion';
import Image from 'next/image';

const heroVariants = {
  offscreen: {
    x: '50%',
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.5,
      duration: 1.2,
    },
  },
};

const Hero = () => {
  return (
    <div
      className={`${styles['section__container']} app__flex app__fullscreen`}
      id='about'
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
        className='app__section'
        initial={{ y: '50%', opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', bounce: 0.5, duration: 1 }}
        viewport={{ once: false, amount: 0.8 }}
      >
        <h1>Hello there, I&apos;m Simone!</h1>
        <h2>This is a h2 tag</h2>
        <p>This will be a long description 🚀</p>
        <a>Test link to check clamp</a>
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
