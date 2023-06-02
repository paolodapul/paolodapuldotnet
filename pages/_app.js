import Header from '@components/Header'
import '../styles/globals.css'
import Maintenance from '@components/Maintenance'
import Main from '@components/Main'
import Head from 'next/head'
import Footer from '@components/Footer'
import { Analytics } from '@vercel/analytics/react';


function MyApp({ Component, pageProps }) {
  if (process.env.MAINTENANCE === 'true') {
    return <Maintenance />
  }

  return (
    <div className="scroll-smooth">
      <Head>
        <title>Paolo Dapul</title>
        <meta
          name="description"
          content="I write about programming and software development."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header className="font-sans" />
      <Main>
        <Component {...pageProps} />
        <Analytics />
      </Main>
      <Footer />
    </div>
  )
}

export default MyApp
