
import {BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Explore from './pages/Explore.jsx'
import SignUp  from './pages/SignUp.jsx'
import ForgotPassword from './pages/ForgotPassword.jsx'
import SignIn from './pages/SignIn.jsx'
import Offers from './pages/Offers.jsx'


import NavBar from '../src/components/NavBar.jsx'
import Profile from './pages/Profile.jsx'
const App = () => {
  return (
    <>
    <Router>
      <Routes>
           <Route path='/' element={<Explore />} />
          <Route path='/offers' element={<Offers />} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
    
      </Routes>
      <NavBar/>
    </Router>
   
    </>
  )
}

export default App