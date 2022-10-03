import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import GifList from '../components/GifList'
import SearchBar from '../components/SearchBar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Welcome to gifOs</title>
        <meta name="description" content="gifOs is successfully built on NextJs with Typescript" />
        <link rel="icon" href="https://res.cloudinary.com/knowhere/image/upload/v1664807435/gifOs/static/favicon_ce2lwj.png" />
      </Head>
      <SearchBar />
      <div className='lg:container mx-10 lg:w-2/4 lg:mx-auto my-10 py-2 px-10 bg-white gifosShadowPink border border-[#E6BBE2]'>
      <div>
      <h2>Today's recommendations:</h2>
      </div>
      <GifList />
      </div>
    </div>
  )
}

export default Home
