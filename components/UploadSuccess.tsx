import {invokeSaveAsDialog} from 'recordrtc'
import {MouseEvent , useRef} from 'react'



function UploadSuccess({previewBlob, gifResponse}: any) {
  const ref = useRef<HTMLButtonElement | any>(null)

  const  copyToClipboardEmbed = (e: MouseEvent<HTMLButtonElement>) => {
    const urlToCopy = `https://giphy.com/gifs/${gifResponse.data.id}`
    e.preventDefault()
    navigator.clipboard.writeText(urlToCopy)
  }

  const handleDownload= (e: MouseEvent<HTMLButtonElement>) =>{
    e.preventDefault()
    invokeSaveAsDialog(previewBlob)
  }

  return (
    <div className="bg-slate-100 lg:w-2/4 lg:mx-auto border mx-10 my-10">
    <div className="gifosGradient dark:gifosGradientDark gifosShadowWhite  p-2">
      <p className="text-white font-bold font-chakra">Gif uploaded successfully</p>
    </div>
    <div className="p-10 grid grid-cols-1 lg:grid-cols-2 gifosShadowWhite">
      <div className='flex justify-center py-10'>
        <img className='pr-5' src={URL.createObjectURL(previewBlob)} alt="gifUploaded" />
      </div>
      <div className='flex flex-col justify-center'>
        <p className='leading-10 font-chakra text-center font-bold'>
          Gif successfully created:
        </p>
        <div className='flex flex-col'>
          <button type='button' className="col-span-1 gifosBtnLight" ref={ref} onClick={copyToClipboardEmbed}>Copy Link</button>
          <button onClick={handleDownload} type='button' className="col-span-1 gifosBtn mt-5">Download Gif</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default UploadSuccess
