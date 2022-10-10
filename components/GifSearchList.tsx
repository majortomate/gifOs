interface Props {
  results: Array<{
    id: string
    title: string
    images: {
      downsized: {
        url: string
      }
    }
  }>
}

function GifSearchList ({ results }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 py-5 gap-5">
      {results.map(gif => (
              <div className="col-span-1 border border-spacing-1" key={gif.id}>
              <div className="gifosGradient gifosShadowWhite p-2 dark:gifosGradientDark">
                <p className="text-white text-sm">{`${gif.title.substring(0, 25)}...`}</p>
              </div>
              <div className="w-full h-full">
                <img src={gif.images.downsized.url} alt="gif" className="w-96 h-40 md:h-64 lg:h-64"/>
              </div>
            </div>
      ))}
    </div>
  )
}

export default GifSearchList
