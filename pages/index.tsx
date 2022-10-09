import { useEffect, useState } from 'react'
import axios from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import GifList from '../components/GifList'
import GifRecommendedList from '../components/GifRecommendedList'
import SearchBar from '../components/SearchBar'

interface Gif {
  id: string
  images: {
    downsized: {
      url: string
    }
  }
  title: string
};
interface GetGifsResponse {
  data: Gif[]
}

const Home: NextPage = () => {
  const [gifs, setGifs] = useState<Gif[]>([])
  const [gifsRecommended, setGifsRecommended] = useState<Gif[]>([])

  useEffect(() => {
    const getGifs = async () => {
      const response = await axios.get<GetGifsResponse>(process.env.NEXT_PUBLIC_GIPHY_SUGGESTED)
      setGifs(response.data.data)
    }
    void getGifs()
  }, [])

  useEffect(() => {
    const getGifsRecommended = async () => {
      const response = await axios.get<GetGifsResponse>(process.env.NEXT_PUBLIC_GIPHY_RECOMMENDED)
      setGifsRecommended(response.data.data)
    }
    void getGifsRecommended()
  }, [])

  return (
    <div>
      <Head>
        <title>Welcome to gifOs</title>
        <meta name="description" content="gifOs is successfully built on NextJs with Typescript" />
        <link rel="icon" href="https://res.cloudinary.com/knowhere/image/upload/v1664807435/gifOs/static/favicon_ce2lwj.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;500;700&display=swap" rel="stylesheet"/>
      </Head>
      <SearchBar />
      <div className='lg:container mx-10 lg:w-2/4 lg:mx-auto my-10 py-10 px-10 bg-white gifosShadowPink border border-[#E6BBE2]'>
        <div>
          <h2 className='dark:text-[#110538]'>Todays trendings:</h2>
        </div>
        <GifList gifs={gifs}/>
      </div>
      <div className='lg:container mx-10 lg:w-2/4 lg:mx-auto my-10 py-10 px-10 bg-white gifosShadowPink border border-[#E6BBE2]'>
        <div>
          <h2 className='dark:text-[#110538]'>Todays recommendations:</h2>
        </div>
        <GifRecommendedList gifsRecommended={gifsRecommended}/>
      </div>
    </div>
  )
}

export default Home
