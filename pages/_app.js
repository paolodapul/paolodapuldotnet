import Header from '@components/Header';
import '../styles/globals.css'
import Maintenance from '@components/Maintenance';

function MyApp({ Component, pageProps }) {

  if (process.env.MAINTENANCE === 'true') {
    return <Maintenance />
  } 

  return (
    <div className='container my-16 mx-auto lg:w-2/5 2xl:w-2/5'>
      <Header className="font-sans" />
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
