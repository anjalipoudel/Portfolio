import AppHeader from '../components/AppHeader';
import Footer from '../components/Footer';
import '../styles/globals.css'

export default function App({ Component, pageProps: { ...pageProps } }) {
  return (
    <>
      <AppHeader />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}