import React from 'react'
import fishing from './fishing.mp4'

const Video=()=>{
	return(<>
	
		<br/>
		<br/>
<h2 align='center'> Videos </h2>
		<div class="container">
      <div class="card-deck mb-3 text-center">
        <div class="card mb-4 box-shadow">
        <video src={fishing}  controls></video>

        </div>
        <div class="card mb-4 box-shadow">
       <video src={fishing}  controls></video>
        </div>
        <div class="card mb-4 box-shadow">
        <video src={fishing}  controls></video>
        </div>

       
        
      </div>
      </div>
      <div class="container">
      <div class="card-deck mb-3 text-center">
        <div class="card mb-4 box-shadow">
        <video src={fishing}  controls></video>

        </div>
        <div class="card mb-4 box-shadow">
       <video src={fishing}  controls></video>
        </div>
        <div class="card mb-4 box-shadow">
        <video src={fishing}  controls></video>
        </div>

        <div class="container">
      <div class="card-deck mb-3 text-center">
        <div class="card mb-4 box-shadow">
        <video src={fishing}  controls></video>

        </div>
        <div class="card mb-4 box-shadow">
       <video src={fishing}  controls></video>
        </div>
        <div class="card mb-4 box-shadow">
        <video src={fishing}  controls></video>
        </div>

       
        
      </div>
      </div>

       
        
      </div>
      </div>

	</>)
}
export default Video;