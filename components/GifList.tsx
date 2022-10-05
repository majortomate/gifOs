function GifList() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 py-5">
      <div className="col-span-1 border border-spacing-1">
        <div className="gifosGradient gifosShadowWhite p-2 dark:gifosGradientDark">
          <p className="text-white text-sm">Season 1 Lol GIF by NBC</p>
        </div>
        <div>
          <img src="https://media4.giphy.com/media/1r91ZwKcE2J7WhUqrh/giphy.gif?cid=376107b3q3u4ce7uxcerjvq7ffcdttx4r03tbavwo3xae7rm&rid=giphy.gif&ct=g" alt="gif" />
        </div>
      </div>
    </div>
  )
}

export default GifList
