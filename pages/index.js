import Head from 'next/head';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Paolo Dapul | Musings and Learnings</title>
        <meta name="description" content="Blog by Paolo Dapul." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
