import { useEffect, useState } from 'react'
import axios from 'axios'
import type { NextPage } from 'next'
import Head from 'next/head'
import GifList from '../components/GifList'
import SearchBar from '../components/SearchBar'


const Home: NextPage = () => {    
const [gifs, setGifs] = useState<Array<Gif>>([])

interface Gif {
  analytics:{}
  analytics_response_payload:{}
  bitly_gif_url: string,
  bitly_url: string,
  content_url: string,
  embed_url: string,
  id: string,
  images: {
    downsized:{
      url: string
      }
  }
  import_datetime: string,
  is_sticker: number,
  rating: string,
  slug: string,
  source: string,
  source_post_url: string,
  source_tld:string,
  title:string,
  trending_datetime:string,
  type:string,
  url:string,
  user: {},
  username: string
};

type GetGifsResponse = {
  data: Array<Gif>;
}

useEffect(() => {
  const getGifs = async () =>{
    const response = await axios.get<GetGifsResponse>("https://api.giphy.com/v1/gifs/trending?&api_key=qvBbZNgISQYMs86HKrz6wN6xrPMKWxwp&limit=8&")
    setGifs(response.data.data)
    console.log(response)
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
