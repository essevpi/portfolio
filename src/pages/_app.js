import Head from 'next/head';
import '../styles/globals.scss';

const Portfolio = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='author' content='Simone Pili' />
        <meta name='keywords' content='portfolio, personal portfolio' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default Portfolio;
