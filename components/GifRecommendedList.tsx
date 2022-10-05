interface Props {
  gifsRecommended: Array<{
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
  }>
}

function GifRecommendedList({gifsRecommended} : Props) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 py-5 gap-5">
      {gifsRecommended ? gifsRecommended.map(gif => (
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

export default GifRecommendedList
