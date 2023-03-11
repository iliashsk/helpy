import React,{useState} from 'react';
import Card from './shared/card'
import Button from "./Button"

import axios from 'axios';

function FeedbackForm({reverse,FeedPass,handleAdd}){
const [state,setState]=useState({value:""});
const [temp,setTemp]=useState({
                            temperature:"",
                            city:""
                                                
                                });

  function handleChange(event) {
    setState({value: event.target.value});
    
  }

  function handleSubmit(event) {
     event.preventDefault();
    const rate={
  text:state.value,
}

axios
.post("/weath", rate)
.then((rate) => {
  console.log(rate.data.town+" " +rate.data.temp);
setTemp({
  temperature:rate.data.temp,
  city:rate.data.town
})
})
      .catch(err => {
        console.error(err);
      });
  }

    return (<>
      <br/><br/>
      <div style={{marginRight:"100px"}} align='center'>
      <Card reverse={true}>
      
      <form onSubmit={handleSubmit}>
      
        <label>
          City Name:
          <input type="text" 
          value={state.value}
           onChange={handleChange}
            placeholder="Type City name "
            />
          <Button type='submit'></Button>
          </label>
      </form>
      <div style={{overflow:"auto",height:"100px",width:"300px"}}>
      {
      (temp.temperature?(<h3>Temperature of {temp.city} is {temp.temperature}
      <sup>o</sup>C</h3>):<h3>you will see your result here</h3>)
      }
      </div>
</Card>
   </div></> );
  }
export default FeedbackForm;
