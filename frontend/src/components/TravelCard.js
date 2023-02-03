import react from 'react';
import {useNavigate} from 'react-router-dom'

const TravelCard=()=>{

const navigate=useNavigate()
  const onSubmit=()=>{
    return(<>
navigate('/new-ticket')
console.log("lksadjlaskdjakl")
      </>)
  }
	
	return(<>
	<div class="container">
      <div class="card-deck mb-3 text-center">
        <div class="card mb-4 box-shadow">
        <form action="new-ticket" method="get">
          <div><img src="photo/laksha.jpg" width="100%" height="300px"></img></div>
          <div class="card-body">
            <h3>Lakshadeep</h3>
            <ul class="list-unstyled mt-3 mb-4">
              <li>good place</li>
              <input type='hidden' name='trip' value='laksha'></input>
              <li>every one enjoy here</li>
              <li>hotel available</li>
              <li>Help center access</li>
            </ul>
            <button type="submit" class="btn btn-lg btn-block btn-outline-primary" onSubmit={onSubmit}>Book</button>
          </div>
           </form>
        </div>
        <div class="card mb-4 box-shadow">
        <form onSubmit={onSubmit} >
          <div><img src="photo/laksha1.jpg" width="100%" height="300px"></img></div>
          <div class="card-body">
            <h3>Lakshadeep</h3>
            <ul class="list-unstyled mt-3 mb-4">
              <li>good place</li>
              <input type='hidden' name='trip' value='laksha2'></input>
              <li>every one enjoy here</li>
              <li>hotel available</li>
              <li>Help center access</li>
            </ul>
            <button type="submit" class="btn btn-lg btn-block btn-outline-primary" name="Iliash sk">Book</button>
          </div>
           </form>
        </div>
        <div class="card mb-4 box-shadow">
        <form onSubmit={onSubmit} >
          <div><img src="photo/laksha2.jpg" width="100%" height="300px"></img></div>
          <div class="card-body">
            <h3>Lakshadeep</h3>
            <ul class="list-unstyled mt-3 mb-4">
              <li>good place</li>
              <input type='hidden' name='trip' value='laksha2'></input>
              <li>every one enjoy here</li>
              <li>hotel available</li>
              <li>Help center access</li>
            </ul>
            <button type="submit" class="btn btn-lg btn-block btn-outline-primary" name="Iliash sk">Book</button>
          </div>
           </form>
        </div>

       
        
      </div>
      </div>
	</>)
}
export default TravelCard;