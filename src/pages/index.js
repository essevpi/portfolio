import Head from 'next/head';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';
import Hero from '../sections/hero/Hero';
import About from '../sections/about/About';
import Skills from '../sections/skills/Skills';
import Projects from '../sections/projects/Projects';

import styles from './App.module.scss';

const Home = () => {
  return (
    <div className={styles.app}>
      <Head>
        <title>essevPi</title>
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
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
