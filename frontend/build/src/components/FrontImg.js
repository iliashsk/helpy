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
	<div className="container">
      <div className="card-deck mb-12 text-center">
        <div className="card mb-12 box-shadow">
        <form onSubmit={onSubmit} >
          
          <div  style={{float:"right"}}>
          <img src="photo/girl.jpg" width="500px" height="600px" style={{borderRadius:'50%'}}></img>
          </div>
          <div className="card-body">
            <button type='button'>visit</button>
            <ul className="list-unstyled mt-3 mb-4">
              <li><h1>The Exotic</h1></li>
              <li><h1 color="green">Lakshadeep</h1></li>
              <li><h1>Island</h1></li>
              <li><button>Discover Now</button></li>
            </ul>
            
          </div>
           </form>
        </div>
       
        </div>
      </div>
	</>)
}
export default FrontImg;