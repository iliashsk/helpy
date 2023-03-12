import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Card from './shared/card'



const FileUpload=()=>{
	const [uploadFile,setUploadFile]=useState('')
//const [subject,setSubject]=useState('')
//const [text,setText]=useState('')


	const onSubmit=(e)=>{
		e.preventDefault();
		

		const data={uploadFile}
		axios
		.post('/upload',data)
		.then(
			console.log("success")
			)
		
	}
	const onDownload=(e)=>{
		e.preventDefault();
		fetch('/download')
		.then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                //alink.download = '';
                alink.target='blank';
                alink.click();
            })
        })
	}
{/*
	useEffect((e)=>{
		//e.preventDefault();
		fetch('/download')
		.then(response => {
            response.blob().then(blob => {
            	const fileURL = window.URL.createObjectURL(blob);
            	let image = document.createElement('img');
            	image.src=fileURL;
            	image.width=200;
            	image.height=200;
            	image.alt='iliash'
            	document.getElementById('imid').appendChild(image);
            })})
	},[])
*/}



	return(<>

		<br/><br/>
{/* <div>
		<h3>Upload Section</h3> <br/>
	
		<form action="/upload"
			method="post"
			enctype="multipart/form-data">
			File to be uploaded: <input type="file"
										name="uploadFile"
										id="" />
			<br/><br/>
			<button type="submit">Upload</button>
		</form>
		<br/>
	</div>
*/}



 <div align='center'>
    
     
      <h1>Download Section</h1>
      <div className='tickets'>
        <table class="table table-striped table-sm">
         
          <th>Content Type </th>
          
          <th>actions </th>
        
        <tr><td>Download our prospectus to know more about us</td><td><form onSubmit={onDownload}>
			<button type="submit">Download</button>
		</form></td></tr>
        </table>
      </div>
    
      </div>

		</>)
}
export default FileUpload