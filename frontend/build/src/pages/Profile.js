import React from "react"
import { useSelector, useDispatch } from 'react-redux'
import Card from '../components/Card'


const Profile=()=>{
	const { user } = useSelector((state) => state.auth)
const handleClick=()=>{
	console.log("upload profile");
	return(
		<input type='file' ></input>
			)
}

	return(<>
		<br/><br/>
		
         
	
	<div align='center' >
	<Card reverse={true}>
	<h1>Welcome</h1>
	<h2>Name:{user.name}</h2>
	<h2>Email:{user.email}</h2>
	</Card>

	<p>
	this is some rule and regulation that you have to maintain while your travelling to lakhshadep
	</p>
	<p>
	this is some rule and regulation that you have to maintain while your travelling to lakhshadep
	</p>
	<p>
	this is some rule and regulation that you have to maintain while your travelling to lakhshadep
	</p>
	<p>
	this is some rule and regulation that you have to maintain while your travelling to lakhshadep
	</p>
	<p>
	this is some rule and regulation that you have to maintain while your travelling to lakhshadep
	</p>
	</div>


	</>)
}
export default Profile