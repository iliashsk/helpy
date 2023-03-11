import React from "react";

import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';

const Voice = () => {
  const recorderControls = useAudioRecorder()

/*componentDidMount() {
  document.getElementById("backgroundMusic").play().catch((error) => {
    document.addEventListener('click', () => {
      document.getElementById("backgroundMusic").play()
    }, { once: true } )
}
*/

const componentDidMount=()=>{
document.getElementById("music").play().catch((error)=>{
  document.addEventListener('',()=>{
    document.getElementById('music').play()
  },{once:true})
})

}

  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    audio.id='music'
    document.getElementById('voice').appendChild(audio);
  };

  return (<>
    <br/><br/><br/>
    <div align='center'>
      <AudioRecorder 
        onRecordingComplete={(blob) => addAudioElement(blob)}
        recorderControls={recorderControls}
      />
      <button onClick={recorderControls.stopRecording}>Stop recording</button>
    </div>
    <div  id='voice' align='center'>
    <br/>
    </div>
  </>)
}

export default Voice;