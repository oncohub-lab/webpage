import { Provider } from 'react-redux';
import Script from 'next/script';

import Layout from '../components/Layout';
import store from '../store/store';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Script
        strategy='afterInteractive'
        src='https://www.googletagmanager.com/gtag/js?id=G-S18MF897SC'
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', 'G-S18MF897SC');
        `}
      </Script>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
