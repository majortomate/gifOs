import React from 'react'
import Head from 'next/head'

function CreateGif() {
  return (
   <>
    <Head>
      <title>Create Your Own Gif</title>
      <meta name="description" content="gifOs is successfully built on NextJs with Typescript" />
      <link rel="icon" href="https://res.cloudinary.com/knowhere/image/upload/v1664807435/gifOs/static/favicon_ce2lwj.png" />
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;500;700&display=swap" rel="stylesheet"/>
    </Head>
    <div className="bg-slate-100 lg:w-2/4 lg:mx-auto border mx-10 my-10">
          <div className="gifosGradient dark:gifosGradientDark gifosShadowWhite  p-2">
            <p className="text-white font-bold font-chakra">Create Your Own Gif</p>
          </div>
          <div className="p-10 grid grid-cols-1 gifosShadowWhite">
            <div className='flex justify-center py-10'>
              <img className='pr-5' src="https://res.cloudinary.com/knowhere/image/upload/v1665156783/gifOs/static/windowimg_rru0ue.png" alt="windowimg" />
              <h1 className='font-bold text-black dark:text-white text-3xl font-chakra'>Here you will be able to create your own gifs</h1>
            </div>
            <p className='leading-10 font-chakra'>
            Creating your Gif is very easy, record any image with your camera and get personalized Gif. The steps to create your Gif are:
              <br/>
              <strong>1)</strong> Give access permissions to the camera (only for the time of use)
              <br/>
              <strong>2)</strong> Capture your Gif moment
              <br/>
              <strong>3)</strong> Check the moment
              <br/>
              <strong>4)</strong> It's ready to upload and share!
              <br/>
              <i>Do you wanna start now?</i>
            </p>
            <div className='flex justify-end'>
            <button type='button' className="col-span-1 gifosBtnLight ml-2">Cancel</button>
            <button type='button' className="col-span-1 gifosBtn ml-2">Start</button>
            </div>
          </div>
    </div>
   </>
  )
}

export default CreateGif
