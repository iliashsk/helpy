import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, RoutesRoutes, Route, Redirect } from 'react-router-dom';
import axios from 'axios';

// Components
import Login from './components/Login';
import Home from './components/Home';
import MechanicList from './components/MechanicList';
import ServiceRequestList from './components/ServiceRequestList';
import VehicleCategoryList from './components/VehicleCategoryList';
import ServiceList from './components/ServiceList';
import Report from './components/Report';
import UserList from './components/UserList';
import WebsiteInformation from './components/WebsiteInformation';
import AccountCredentials from './components/AccountCredentials';

function Helpy() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('/api/auth', { headers: { Authorization: `Bearer ${token}` } })
        .then(res => {
          setIsAuthenticated(true);
          setUser(res.data.user);
          setIsLoading(false);
        })
        .catch(err => {
          localStorage.removeItem('token');
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, []);

  const handleLogin = (data) => {
    axios.post('/api/auth', data)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        setIsAuthenticated(true);
        setUser(res.data.user);
      })
      .catch(err => console.log(err));
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    setUser({});
  };

  return (
    <Router>
      {isLoading ? <div>Loading...</div> :
        <Routes>
          <Route exact path='/login'>
            {isAuthenticated ? <Redirect to='/' /> : <Login handleLogin={handleLogin} />}
          </Route>
          <Route path='/'>
            {isAuthenticated ?
              <>
                <Home user={user} handleLogout={handleLogout} />
                <Switch>
                  <Route exact path='/mechanics'>
                    <MechanicList />
                  </Route>
                  <Route exact path='/service-requests'>
                    <ServiceRequestList />
                  </Route>
                  <Route exact path='/vehicle-categories'>
                    <VehicleCategoryList />
                  </Route>
                  <Route exact path='/services'>
                    <ServiceList />
                  </Route>
                  <Route exact path='/report'>
                    <Report />
                  </Route>
                  <Route exact path='/users'>
                    <UserList />
                  </Route>
                  <Route exact path='/website-information'>
                    <WebsiteInformation />
                  </Route>
                  <Route exact path='/account-credentials'>
                    <AccountCredentials />
                  </Route>
                  <Redirect to='/' />
                </Switch>
              </> :
              <Redirect to='/login' />
            }
          </Route>
        </Routes>
      }
    </Router>
  );
}

export default Helpy;