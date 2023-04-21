import Head from 'next/head';
import { Montserrat } from 'next/font/google';

import '../styles/globals.scss';

const montserrat = Montserrat({ subsets: ['latin'] });

const Portfolio = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='author' content='Simone Pili' />
        <meta name='keywords' content='portfolio, personal portfolio' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <main className={montserrat.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default Portfolio;
