import react from 'react';
import {useNavigate} from 'react-router-dom'

const FrontImg=()=>{

const navigate=useNavigate()
  const onSubmit=()=>{
    return(<>
navigate('/regist:name="Iliash"')
      </>)
  }
	
	return(<>
  <h1 align='center' style={{color:"red",fontSize:'50px'}}><marquee>WELCOME TO HELPY MOTO PTV LTD</marquee></h1>
	<div className="container" style={{backgroundColor:"lightCyan"}}>
             <div className="card mb-12 box-shadow" style={{backgroundColor:"lightCyan"}}>
        <form onSubmit={onSubmit} >
          
          <div  style={{float:"right"}}>
          <img src="photo/girl.jpg" width="500px" height="600px" style={{borderRadius:'50%'}}></img>
          </div>
          <div className="card-body">
            <button type='button'>visit</button>
            <ul className="list-unstyled mt-3 mb-4">
              <li><h1>A Well defined company</h1></li>
              <li><h1 color="green">Kepp in touch with us</h1></li>
              <li><h1>A great company</h1></li>
              <li><button>Discover Now</button></li>
            </ul>
            
          </div> 
           </form>
        </div>
       
        
      </div>
	</>)
}
export default FrontImg;