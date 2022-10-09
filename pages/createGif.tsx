import dynamic from 'next/dynamic'
import Head from 'next/head'
const VideoRecordingDialog = dynamic(async () => await import('../components/Recorder'), { ssr: false })

function CreateGif () {
  return (
   <div className='min-h-screen'>
    <Head>
      <title>Create Your Own Gif</title>
      <meta name="description" content="gifOs is successfully built on NextJs with Typescript" />
      <link rel="icon" href="https://res.cloudinary.com/knowhere/image/upload/v1664807435/gifOs/static/favicon_ce2lwj.png" />
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;500;700&display=swap" rel="stylesheet"/>
    </Head>
    <VideoRecordingDialog />

   </div>
  )
}

export default CreateGif
