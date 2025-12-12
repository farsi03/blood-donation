import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Sign from './components/Sign'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import LandingPage from './components/LandingPage'
import Dashboard from './components/Dashboard'
import DbNavBar from './components/DbNavBar'
import Request from './components/Request'
import AdDash from './components/AdDash'
import AdNavBar from './components/adNavBar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
    
  

    <Routes>
      <Route path='/' element={<><NavBar/><LandingPage /></>} />
      <Route path='/lo' element={<><NavBar/><Login /></>} />
       <Route path='/si' element={<><NavBar/><Sign /></>} />
       <Route path='/dashboard' element={<><DbNavBar/><Dashboard/></>} />
       <Route path='/r' element={<Request/>} />
       <Route path='/admindashboard' element={<><AdNavBar/><AdDash/></>} />
      
           </Routes> 
    
    </>
  )
}

export default App
