
import {BrowserRouter as Router,Routes, Route } from 'react-router-dom'

import 'react-toastify/dist/ReactToastify.css';
import Explore from './pages/Explore.jsx'
import SignUp  from './pages/SignUp.jsx'
import ForgotPassword from './pages/ForgotPassword.jsx'
import SignIn from './pages/SignIn.jsx'
import Offers from './pages/Offers.jsx'
import { ToastContainer } from 'react-toastify';

import NavBar from '../src/components/NavBar.jsx'
import Profile from './pages/Profile.jsx'
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import CreateListing from './pages/CreateListing.jsx';
import Category from './pages/Category.jsx';
import Listing from './pages/Listing.jsx';
import Contact from './pages/Contact.jsx';


const App = () => {
  return (
    <>
    <Router>
      <Routes>
           <Route path='/' element={<Explore />} />
          <Route path='/offers' element={<Offers />} />
          <Route path='/category/:categoryName' element={<Category/>}/>
          <Route path = '/profile' element ={<PrivateRoute/>}>
          <Route path='/profile' element={<Profile />} />

          </Route>
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/create-listing' element ={<CreateListing />}/>
          <Route
            path='/category/:categoryName/:listingId'
            element={<Listing/>}
          />
          <Route path='/contact/:landlordId' element ={<Contact/>}/>
      </Routes>
      <NavBar/>
    </Router>
    <ToastContainer/>
   
    </>
  )
}

export default App