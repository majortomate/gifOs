import { useState, useRef } from 'react'
import axios from 'axios'
import useDebounce from '../hooks/useDebounce'
import GifSearchList from './GifSearchList'
function SearchBar () {
  const [results, setResults] = useState<Result[]>([])
  const [query, setQuery] = useState('')
  const debounceSearch = useDebounce(query, 500)
  const ref = useRef<HTMLInputElement>(null)

  interface Result {
    id: string
    title: string
    images: {
      downsized: {
        url: string
      }
    }
  }

  interface GetResultsResponse {
    data: Result[]
  }
  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  const clickHandler = async () => {
    const response = await axios.get<GetResultsResponse>(`${process.env.NEXT_PUBLIC_GIPHY_SEARCH}${debounceSearch}`)
    setResults(response.data.data)
    if (ref.current != null) {
      ref.current.value = ''
    }
  }

  return (
    <>
      <div className="bg-slate-100 lg:w-2/4 lg:mx-auto border mx-10 my-10">
        <div className="gifosGradient dark:gifosGradientDark gifosShadowWhite  p-2">
          <p className="text-white font-bold">Search</p>
        </div>
        <div className="p-5 grid grid-cols-4 gifosShadowWhite">
          <input onChange={searchHandler} ref={ref} type="search" name="" id="" placeholder="Search gifs with hashtags, themes, anything you want..." className="col-span-3 p-2 gifosShadowBlack dark:bg-white dark:text-black" />
          <button onClick={clickHandler} type='button' className="col-span-1 gifosBtn ml-2 flex justify-center text-sm lg:text-base">
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="10" cy="10" r="7"></circle>
            <line x1="21" y1="21" x2="15" y2="15"></line>
          </svg>
            Search
          </button>
        </div>
      </div>
    {results.length > 1
      ? <div className='lg:container mx-10 lg:w-2/4 lg:mx-auto my-10 py-10 px-10 bg-white gifosShadowPink border border-[#E6BBE2]'>
        <h2 className='dark:text-[#110538]'>
          Search Results:
        </h2>
        <GifSearchList results={results}/>
    </div>
      : null
  }
    </>
  )
}

export default SearchBar
