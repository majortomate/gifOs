interface Props {
  gifs: Array<{
    id: string,
    images: {
      downsized:{
        url: string
      }
    }
    title:string,
  }>
}

function GifList({gifs} : Props) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 py-5 gap-5">
      {gifs ? gifs.map(gif => (
              <div className="col-span-1 border border-spacing-1" key={gif.id}>
              <div className="gifosGradient gifosShadowWhite p-2 dark:gifosGradientDark">
                <p className="text-white text-sm">{`${gif.title.substring(0,25)}...`}</p>
              </div>
              <div>
                <img src={gif.images.downsized.url} alt="gif" className="w-full h-full"/>
              </div>
            </div>
      )): null}
    </div>
  )
}

export default GifList
