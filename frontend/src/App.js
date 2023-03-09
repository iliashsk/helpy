import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { useAuthStatus } from './hooks/useAuthStatus'

//import 'react-toastify/dist/ReactToastify.css'
//import Header from './components/Header'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import ProImg from './pages/ProImg'
import NewTicket from './pages/NewTicket'
import Tickets from './pages/Tickets'
import Ticket from './pages/Ticket'

import Signin from './admin/Signin'

import { useSelector, useDispatch } from 'react-redux'
/////////////components////////////////
import PrivateRoute from './components/PrivateRoute'
import Headerbar from './components/nav/Headerbar'
import Location from './components/Location'
//import Map from './map/Map'
//import LeafMap from './map/LeafMap'
import Video from './video/Video'
import TravelCard from './components/TravelCard'
import FrontImg from './components/FrontImg'
import Footer from './components/nav/Footer'
//import Calculator from './calculator/Calculator'
import SendMail from './components/SendMail'
import Sidebar from './components/nav/Sidebar'
////////////////////helpy///////////
import HomePage from './helpy/HomePage'
import ManageMechanics from './helpy/ManageMechanics'
import VehicleDetails from './helpy/VehicleDetails'
import DeleteVehicle from './helpy/DeleteVehicle'
import Spinner from './components/Spinner'
import Contact from './components/Contact'
// NOTE: Here we have removed the nested routing as the path is the same

function App() {
  const { user } = useSelector((state) => state.auth)
//we  can use this  user with conditional statemwent for conditional rendering........
  const {isLoading, loggedIn} = useAuthStatus();
  if(loggedIn){
if(isLoading){return(<Spinner/>)}
    return(<>
  <Router>
  <Routes>

    <Route path='/' element={<><Sidebar content={<><HomePage/></>} /></>}/>
     <Route path='/mechanic' element={<><Sidebar content={<><ManageMechanics/></>} /></>}/>
     <Route path='/vdetails' element={<><Sidebar content={<><VehicleDetails/></>} /></>}/>
     <Route path='/vdelete' element={<><Sidebar content={<><DeleteVehicle/></>} /></>}/>
    <Route path='/email' element={<><Sidebar content={<><SendMail/></>} /></>} />

  </Routes>
  </Router>
      </>)

  
  }




//////////////
  else{
    return (
    <>
      <Router>
        <Headerbar/>
        
         {/* <Header /> */}
          <ToastContainer />
          <Routes>
            <Route path='/' element={<><br/><br/><br/><br/><FrontImg/><TravelCard/></>} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/register' element={<Register />} />
            <Route path='/contact' element={<><Contact/></>} />
          {/*} <Route path='/map' element={<><Map /><LeafMap/></>} /> */}
            <Route path='/video' element={<><PrivateRoute><Video/></PrivateRoute></>}/>
            <Route
              path='/new-ticket'
              element={
                <PrivateRoute>
                  <NewTicket />
                </PrivateRoute>
              }
            />
            <Route
              path='/tickets'
              element={
                <PrivateRoute>
                  <Tickets />
                </PrivateRoute>
              }
            />
            <Route
              path='/ticket/:ticketId'
              element={
                <PrivateRoute>
                  <Ticket />
                </PrivateRoute>
              }
            />
            <Route path='/dash' element={<Signin/>} />
          </Routes>
        
      </Router>
      <Footer/>
      
    </>
  )

  }
    
  
  
}

export default App
