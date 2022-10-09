import {useState, useRef} from 'react'
import RecordRTC from 'recordrtc'
import axios, { AxiosResponse } from 'axios';
import UploadSuccess from './UploadSuccess';


function Recorder() {
  let recorder: any;
  const [startCamera, setStartCamera] = useState(false)
  const [recording, setRecording] = useState<any>(null)
  const [startRecording, setStartRecording] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [loading, setLoading] = useState(false)
  const [gifResponse, setGifResponse] = useState<AxiosResponse<any, any>>()
  const [stopRecording, setStopRecording] = useState(false)
  const [saveblob, setSaveBlob] = useState<string | Blob>("")
  const [previewBlob, setPreviewBlob] = useState<any>()
  const ref = useRef<HTMLVideoElement | any>(null)

const captureCamera = async (cb: any) => {
  await navigator.mediaDevices.getUserMedia({audio:false, video:true})
  .then(camera=> {cb(camera);
  }).catch(error=> alert(error));
}
const handleStartCamera = () =>{
  setStartCamera(true)
  captureCamera((camera: MediaProvider | null) =>{
    ref.current.srcObject = camera
    ref.current.play()
})
}

const handleStartRecording = () =>{
 captureCamera((camera: HTMLVideoElement) =>{
    ref.current.srcObject = camera
    ref.current.play()
    recorder = new RecordRTC(camera, { type: 'gif' })
    recorder.startRecording();
    recorder.camera = camera;
    setRecording(recorder)
    })
    setStartRecording(true)
}

const handleStopRecording = () => {
  recording.stopRecording();
  recording.camera.stop();
  const blob = recording.getBlob();
  console.log(blob)
  setSaveBlob(blob)
  setPreviewBlob(blob)
  setStopRecording(true)
}

const handleUploadGif = async () => {
    setLoading(true)
    const formData = new FormData();
    formData.append("file", saveblob, "giftoUpload");
    const response = await axios.post(process.env.NEXT_PUBLIC_GIPHY_UPLOAD, formData)
    setGifResponse(response.data)
    console.log(response.data)
    setUploading(true)
}
  return (
    <>

    {
      !startCamera ?
      <div className="bg-slate-100 lg:w-2/4 lg:mx-auto border mx-10 my-10">
        <div className="gifosGradient dark:gifosGradientDark gifosShadowWhite  p-2">
          <p className="text-white font-bold font-chakra">Create Your Own Gif</p>
        </div>
        <div className="p-10 grid grid-cols-1 gifosShadowWhite">
          <div className='flex justify-center py-10'>
            <img className='pr-5 h-10' src="https://res.cloudinary.com/knowhere/image/upload/v1665156783/gifOs/static/windowimg_rru0ue.png" alt="windowimg" />
            <h1 className='font-bold text-black dark:text-[#110538] text-3xl font-chakra'>Here you will be able to create your own gifs</h1>
          </div>
          <p className='leading-10 font-chakra dark:text-[#110538]'>
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
          <button onClick={handleStartCamera} type='button' className="col-span-1 gifosBtn ml-2">Initiate Camera</button>
          </div>
        </div>
      </div>
          :     
          !stopRecording ?
          <div className="bg-slate-100 lg:w-1/3 lg:mx-auto border mx-10 my-10">
          <div className="gifosGradient dark:gifosGradientDark gifosShadowWhite  p-2">
            <p className="text-white font-bold font-chakra">A Quick Check Before Start</p>
          </div>
          <div className="grid grid-cols-1 gifosShadowWhite p-10">
            <video ref={ref} src="" className='w-full'/>
            <div className='flex justify-end'>
              <button onClick={!startRecording ?handleStartRecording : handleStopRecording} type='button' className={!startRecording ? "col-span-1 gifosBtn ml-2 mt-5" : "col-span-1 gifosBtnRed ml-2 mt-5"}>
                {!startRecording ? "Start Recording" : "Stop Recording"}
              </button>
            </div>
          </div>
        </div> :
            !uploading ?
            <div className="bg-slate-100 lg:w-1/3 lg:mx-auto border mx-10 my-10">
            <div className="gifosGradient dark:gifosGradientDark gifosShadowWhite  p-2">
              <p className="text-white font-bold font-chakra">Here's the preview of your Gif</p>
            </div>
            <div className="grid grid-cols-1 gifosShadowWhite p-10">
              <img src={URL.createObjectURL(previewBlob)}  alt="gif" className="w-full h-full"/>
              <div className='flex justify-end'>
              <button onClick={handleUploadGif} type='button' className="col-span-1 gifosBtn ml-2 mt-5" disabled={loading ? true : false}>
                {!loading ? "Upload Gif" : "Uploading..."}
              </button>
              </div>
            </div>
          </div> :
          <UploadSuccess previewBlob={previewBlob} gifResponse={gifResponse}/>
          }
    </>
  )
}

export default Recorder
