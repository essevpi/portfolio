import Head from 'next/head';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';
import Hero from '../sections/hero/Hero';
import Contact from '../sections/contact/Contact';
import Skills from '../sections/skills/Skills';

import styles from './App.module.scss';

export default function Home() {
  return (
    <div className={styles.app}>
      <Head>
        <title>essevpi</title>
        <meta name='description' content='essevpi homepage' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />
      <Hero />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
