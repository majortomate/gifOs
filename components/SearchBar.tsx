
function SearchBar() {
  return (
    <div className="bg-slate-100 lg:w-2/4 lg:mx-auto border mx-10 my-10">
      <div className="gifosGradient gifosShadowWhite  p-2">
        <p className="text-white font-bold">Search</p>
      </div>
      <div className="p-5 grid grid-cols-4 gifosShadowWhite ">
        <input type="search" name="" id="" placeholder="Search gifs with hashtags, themes, anything you want..." className="col-span-3 p-2 gifosShadowBlack"/>
        <button className="col-span-1 gifosBtn ml-2">Search</button>
      </div>
    </div>
  )
}

export default SearchBar
