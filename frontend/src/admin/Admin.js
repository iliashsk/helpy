import React from 'react';
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
const Admin=()=>{

	const [admin,setAdmin]=useState({
		name:'',
		pass:'',
	});
	
	const {name,pass}=admin;
	

	const handleChange=(e)=>{
e.preventDefault();
setAdmin({
	[e.target.name]:e.target.value,
})
	}
const navigate=useNavigate();
	const handleSubmit=()=>{
		navigate('/');

	}

	return(<>
<main class="form-signin w-100 m-auto">
  <form onSubmit={handleSubmit}>
    <h1 class="h3 mb-3 fw-normal" align="center">Admin Login</h1>

    <div class="form-floating">
    <label for="floatingInput">Email Address::</label>
      <input type="email"
       class="form-control" 
       id="floatingInput" 
       placeholder="name@example.com"
        name='name'
        value={name}
        onChange={handleChange}
         ></input>
        
      
    </div>
    <div class="form-floating">
    <label for="floatingPassword">Password::</label>
      <input type="password" 
      class="form-control" 
      id="floatingPassword" 
      placeholder="Password" 
      name='pass'
      value={pass}
       ></input>
      
    </div>
    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
  </form>
</main>
	</>)
}
export default Admin