import Header from '@components/Header';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header className="container mx-auto lg:w-1/3 2xl:w-1/3" />
      <main className="container mx-auto lg:w-1/3 2xl:w-1/3">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
