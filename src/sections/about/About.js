import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AboutData from './about_data';
import AboutAsset from '../../../public/images/about_asset.svg';
import styles from './About.module.scss';

const magicVariants = {
  offscreen: {
    x: '100%',
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'easeOut',
      bounce: 0.5,
      duration: 0.75,
    },
  },
};

const About = () => {
  return (
    <div
      className={`${styles['section__container']} app__flex app__fullscreen`}
      id='about'
    >
      <motion.div
        variants={magicVariants}
        initial='offscreen'
        whileInView='onscreen'
        viewport={{ once: false }}
        className={`${styles['about__container']} app__section`}
      >
        <div className={styles['about__heading-wrapper']}>
          <h2>{AboutData.headerText}</h2>
        </div>
        <div className={styles['about__content-wrapper']}>
          <div className={styles['about__content-image-wrapper']}>
            <Image src={AboutAsset} alt='building web' />
          </div>
          <div className={styles['about__content-text-wrapper']}>
            <p>{AboutData.intro}</p>
            <br />
            <p>{AboutData.subtext}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;