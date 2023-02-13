import React,{useState} from 'react'
import axios from 'axios'


const SendMail=()=>{
	const [sendmail,setSendmail]=useState('')
const [subject,setSubject]=useState('')
const [text,setText]=useState('')


	const onSubmit=(e)=>{
		e.preventDefault();
		

		const data={sendmail,subject,text}
		axios
		.post('/mail',data)
		.then(
			console.log("success")
			)
		
	}


	return(<>

		<br/><br/>
		<form onSubmit={onSubmit}>
  <div>
    <label>Email address</label>
    <input type="email" className="form-control" name="sendmail" onChange={(e)=>{setSendmail(e.target.value)}} placeholder="Enter email"></input>
    
  </div>
  <div >
    <label >Subject</label>
    <input type="text" className="form-control" name="subject" onChange={(e)=>{setSubject(e.target.value)}} placeholder="Enter subjects"></input>
    
  </div>
  <div>
    <label >Body contents</label>
    <input type="text" className="form-control" name="text" onChange={(e)=>{setText(e.target.value)}} placeholder="Enter Texts"></input>
    
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
		</>)
}
export default SendMail