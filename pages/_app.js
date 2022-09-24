import Header from '@components/Header'
import '../styles/globals.css'
import Maintenance from '@components/Maintenance'
import Main from '@components/Main'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  if (process.env.MAINTENANCE === 'true') {
    return <Maintenance />
  }

  return (
    <>
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
      </Main>
    </>
  )
}

export default MyApp
