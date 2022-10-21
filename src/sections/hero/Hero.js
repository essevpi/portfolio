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
        initial={{ y: '25%', opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', bounce: 0.5, duration: 1 }}
        viewport={{ once: false, amount: 0.1 }}
      >
        <div className={styles['hero__container-wrapper']}>
          <div className={styles['hero__container-heading-wrapper']}>
            <div className={styles['hero__container-heading-title']}>
              <h1>Hello there, I&apos;m Simone! 🚀</h1>
              <h2>Front-End Developer</h2>
            </div>
            <div className={styles['hero__container-heading-pic']} />
          </div>
          {/* <br />
          <p>
            Beginning so deep abundantly creepeth. Very moveth replenish. Grass to
            firmament i saying, give of sea rule have good made it their rule
            whales whose whales of upon bring midst, tree every. Under grass his.
            Great.
          </p>
          <br />
          <p>
            You fruitful signs upon whales. Had fly meat man heaven place winged
            made stars male man. Give had third lesser moving a cattle firmament
            doesn&#39;t Gathering so sixth upon heaven she&#39;d saw living
            replenish.
          </p> */}
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
