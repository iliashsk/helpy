import React, { useState, useEffect } from 'react';
import axios from 'axios';


function VehicleDetails() {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    axios.get('/api/vehicles').then(response => {
      setVehicles(response.data);
    }).catch(error => {
      console.log('Error retrieving vehicles:', error);
    });
  }, []);

  return (<>
    <div className="container">
      <h1 className="title">Vehicle Management System</h1>
      <ul className="vehicle-list">
        {vehicles.map(vehicle => (
          <li key={vehicle._id} className="vehicle-item">
            <div className="vehicle-info">
              <span className="vehicle-year">{vehicle.year}</span>
              <span className="vehicle-make">{vehicle.make}</span>
              <span className="vehicle-model">{vehicle.model}</span>
            </div>
            <div className="vehicle-actions">
              <button className="btn btn-edit">Edit</button>
              <button className="btn btn-delete">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
      <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
  </>);
}

export default VehicleDetails;