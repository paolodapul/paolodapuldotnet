import Head from 'next/head';

export default function Maintenance() {
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
      <article className="prose text-slate-700 container px-10 my-48 md:mx-auto lg:mx-auto sm:w-3/5 sm:mx-auto lg:w-2/5 2xl:w-2/5 text-lg subpixel-antialiased">
        <p className="mb-2">
          I have an ongoing revamp of this site, but this will be back
          eventually. Something better will be up. 👆🏼
        </p>
        <p className="mb-2">
          For correspondence, feel free reaching out on{' '}
          <a
            href="https://www.linkedin.com/in/paolodapul/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          , or <a href="mailto:paolodapultech@gmail.com">email</a>.
        </p>
        <p className="mb-2">
          Best, <br />
          Paolo
        </p>
      </article>
    </>
  );
}
