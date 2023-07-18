import Layout from '@/comps/Layout'
import '@/styles/globals.css'
import Script from 'next/script'
import Head from 'next/head'


export default function App({ Component, pageProps }) {
  return (
    <Layout>
  <Head>
        <title>My page title</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>      <Component {...pageProps} />
      <Script 
      strategy='afterInteractive'
      src="https://www.googletagmanager.com/gtag/js?id=G-MYBLBE82C9" />

      <Script id='google-analytics' strategy='afterInteractive'>

        {`
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
       
         gtag('config', 'G-MYBLBE82C9');
        `}

      </Script>

      

    </Layout>
  )
}
