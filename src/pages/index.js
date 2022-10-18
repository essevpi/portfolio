import { useState, useEffect } from 'react';
import Head from 'next/head';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';
import Hero from '../sections/hero/Hero';
import Contact from '../sections/contact/Contact';
import Skills from '../sections/skills/Skills';

import styles from './App.module.scss';

export default function Home() {
  /* useEffect(() => {
    const updateVh = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    window.addEventListener('resize', updateVh);

    return () => window.removeEventListener('resize', updateVh);
  }, []); */

  return (
    <div className={styles.app}>
      <Head>
        <title>essevpi</title>
        <meta name='description' content='Homepage' />
        <link
          rel='icon'
          href={`${
            process.env.NODE_ENV === 'production'
              ? `${process.env.NEXT_PUBLIC_FAVICON}/favicon.ico`
              : '/favicon.ico'
          }`}
        />
      </Head>

      <Navbar />
      <Hero />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
