import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageMechanics = () => {
  const [mechanics, setMechanics] = useState([]);
  const [newMechanic, setNewMechanic] = useState({ name: '', email: '', phone: '' });

  const loadMechanics = async () => {
    const response = await axios.get('/api/mechanics');
    setMechanics(response.data);
    loadMechanics();
  };

  useEffect(() => {
    loadMechanics();
  }, []);

  const handleNewMechanicChange = (event) => {
    const { name, value } = event.target;
    setNewMechanic((prev) => ({ ...prev, [name]: value }));
  };

  const handleNewMechanicSubmit = async (event) => {
    event.preventDefault();
    await axios.post('/api/mechanics', newMechanic);
    setNewMechanic({ name: '', email: '', phone: '' });
    loadMechanics();
  };

  const handleDeleteMechanic = async (mechanicId) => {
    await axios.delete(`/api/mechanics/${mechanicId}`);
    loadMechanics();
  };

  return (<>
    <div>
      <h1>Manage Mechanics</h1>
      <form onSubmit={handleNewMechanicSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={newMechanic.name} onChange={handleNewMechanicChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={newMechanic.email} onChange={handleNewMechanicChange} />
        </div>
        <div>
          <label>Phone:</label>
          <input type="text" name="phone" value={newMechanic.phone} onChange={handleNewMechanicChange} />
        </div>
        <button type="submit">Add Mechanic</button>
      </form>
      <table class="table table-striped table-sm">
        <thead>
          <tr style={{backgroundColor:'violet'}}>
            <th style={{color:"blue"}}>Name</th>
            <th style={{color:"blue"}}>Email</th>
            <th style={{color:"blue"}}>Phone</th>
            <th style={{color:"blue"}}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {mechanics.map((mechanic) => (
            <tr key={mechanic._id}>
              <td>{mechanic.name}</td>
              <td>{mechanic.email}</td>
              <td>{mechanic.phone}</td>
              <td>
                <button onClick={() => handleDeleteMechanic(mechanic._id)} style={{color:'red'}}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
    

  </>);
};

export default ManageMechanics;