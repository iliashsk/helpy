import React, { useState } from "react";
  import Card from '../components/Card'


function ProImg() {
    const [file, setFile] = useState('photo/girl.jpg');
    function handleChange(e) {
        window.localStorage.removeItem('image');
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
        window.localStorage.setItem('image',e.target.files[0]);
    }
  
    return (<>
        <br/><br/>
        <h1 align='center' style={{color:'green'}}> Profile</h1>
        <div className="App" height="200px" width='200px' align='center'>
        <Card reverse={true}>
            <h2>Add Image:</h2>
            <input type="file" onChange={handleChange} />
            <img src={file} width='150px' height='150px' style={{borderRadius:'50%'}}></img>
  </Card>
        </div>

        </>
  
    );
}
  
export default ProImg;