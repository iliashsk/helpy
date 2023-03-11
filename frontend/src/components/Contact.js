import react from 'react';
import Map from '../map/Map'


const Contact=()=>{



	return(<>
      <br/><br/>
          <div className="card-body"style={{float:'right'}}>
            
            <ul className="list-unstyled mt-3 mb-4">
              <li><h1>Softech Technology</h1></li>
              
              <li><h1>Ceo:Iliash Sk</h1></li>
              <li><h1>Mobile No:6295737320/8597898411</h1></li>
              <li><h1>Plassey,Nadia,741150</h1></li>
            </ul>

            
          </div> 
          <div className="text-center">
            <img src="/iliash.jpg" class="rounded" style={{width:'300px', height:'400px'}} alt="ceo image"></img>
          </div>
          <div><Map/></div>
          
	</>)
}
export default Contact;