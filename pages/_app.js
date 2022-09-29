import '../styles/globals.css'
import Head from 'next/head'

import Header from '../components/header'
import Bottom from '../components/bottom'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>MSHA Builders Club</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <div className="dark flex flex-col h-screen justify-between bg-gray-900">
        <Header />
        <main className="mb-auto"><Component {...pageProps} /></main>
        <Bottom />
      </div>
    </>
  )
}
