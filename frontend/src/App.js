import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
//import 'react-toastify/dist/ReactToastify.css'
//import Header from './components/Header'
import PrivateRoute from './components/PrivateRoute'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import ProImg from './pages/ProImg'
import NewTicket from './pages/NewTicket'
import Tickets from './pages/Tickets'
import Ticket from './pages/Ticket'

import { useSelector, useDispatch } from 'react-redux'

import Headerbar from './components/nav/Headerbar'
import Location from './components/Location'
import Map from './map/Map'
import LeafMap from './map/LeafMap'
import Video from './video/Video'
import TravelCard from './components/TravelCard'
import FrontImg from './components/FrontImg'
import Footer from './components/nav/Footer'
// NOTE: Here we have removed the nested routing as the path is the same

function App() {
  const { user } = useSelector((state) => state.auth)
//we  can use this  user with conditional statemwent for conditional rendering........
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
            <Route path='/profile' element={<><ProImg/><Profile /></>} />
           <Route path='/map' element={<><Map /><LeafMap/></>} />
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
          </Routes>
        
      </Router>
      <Footer/>
      
    </>
  )
  
  
}

export default App
