import {useState, useRef} from 'react'
import axios from 'axios'
import useDebounce from '../hooks/useDebounce'
import GifSearchList from './GifSearchList'
function SearchBar() {
  const [results, setResults] = useState<Array<Result>>([])
  const [query, setQuery] = useState('')
  const debounceSearch = useDebounce(query, 500)
  const ref = useRef<HTMLInputElement>(null);

  interface Result {
    id:string,
    title:string,
    images: {
      downsized:{
        url: string
        }
    }
  }

  type GetResultsResponse = {
    data: Array<Result>;
  }
  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setQuery(e.target.value)
  }

  
  const clickHandler = async () =>{
    const response = await axios.get<GetResultsResponse>(`${process.env.NEXT_PUBLIC_GIPHY_SEARCH}${debounceSearch}`)
      setResults(response.data.data)
      if (ref.current != null) {
        ref.current.value = '';
      }
  }
  
  return (
    <>
      <div className="bg-slate-100 lg:w-2/4 lg:mx-auto border mx-10 my-10">
        <div className="gifosGradient dark:gifosGradientDark gifosShadowWhite  p-2">
          <p className="text-white font-bold">Search</p>
        </div>
        <div className="p-5 grid grid-cols-4 gifosShadowWhite">
          <input onChange={searchHandler} ref={ref} type="search" name="" id="" placeholder="Search gifs with hashtags, themes, anything you want..." className="col-span-3 p-2 gifosShadowBlack" />
          <button onClick={clickHandler} type='button' className="col-span-1 gifosBtn ml-2">Search</button>
        </div>
      </div>
    {results.length > 1 ?
        <div className='lg:container mx-10 lg:w-2/4 lg:mx-auto my-10 py-2 px-10 bg-white gifosShadowPink border border-[#E6BBE2]'>
        <h2>
          Search Results:
        </h2>
        <GifSearchList results={results}/>
    </div> : null  
  }
    </>
  )
}

export default SearchBar
