import { useEffect, useState } from 'react'
import axios from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import GifList from '../components/GifList'
import SearchBar from '../components/SearchBar'


const Home: NextPage = () => {

  interface gifsProps {
    type: string,
    id: string,
    url: string,
    slug: string,
    bitly_gif_url: string,
    bitly_url: string,
    embed_url: string,
    username: string,
    source: string,
    rating: string,
    content_url: string,
    source_tld: string,
    source_post_url: string,
    is_sticker: number,
    import_datetime: string,
    trending_datetime: string,
    images: [Object],
    user: [Object],
    analytics_response_payload: string,
    analytics: [Object]
  }
  
  
const [gifs, setGifs] = useState({})

type Gif = {
  type: string,
      id: string,
      url: string,
      slug: string,
      bitly_gif_url: string,
      bitly_url: string,
      embed_url: string,
      username: string,
      source: string,
      rating: string,
      content_url: string,
      source_tld: string,
      source_post_url: string,
      is_sticker: number,
      import_datetime: string,
      trending_datetime: string,
      images: [Object],
      user: [Object],
      analytics_response_payload: string,
      analytics: [Object]
};

type GetGifsResponse = {
  gifs: Gif[];
}

useEffect(() => {
  const getGifs = async () =>{
    const response = await axios.get<GetGifsResponse>("https://api.giphy.com/v1/gifs/trending?&api_key=qvBbZNgISQYMs86HKrz6wN6xrPMKWxwp&limit=4&")
    setGifs(response.data.gifs)
  }
 getGifs()
}, [])


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
      <GifList gifs={gifs}/>
      </div>
    </div>
  )
}

export default Home
