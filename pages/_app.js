import Head from 'next/head'
import '../styles/global.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Humphrey Litan</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}