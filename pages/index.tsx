import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layouts'

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Ali Portfolio</title>
        <meta name="description" content="Ali portfolio showcase" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>I am Ali, a Frontend Engineer</h1>
      <p>Currently I am a Senior Frontend Engineer at <a href="https://mintox.com" rel='nofollow'>Mintox</a></p>
    </Layout>
  )
}

export default Home
