
import { useNavigate, useLocation } from 'react-router-dom'
import {ReactComponent as OfferIcon } from '../../src/assets/svg/localOfferIcon.svg'
import { ReactComponent as ExploreIcon } from '../../src/assets/svg/exploreIcon.svg'
import { ReactComponent as PersonalOutlineIcon } from '../../src/assets/svg/personOutlineIcon.svg'


const NavBar = () => {
    const location = useLocation()
    const navigate = useNavigate ()


    const pathMatchRoute =(route) =>{
        if(route ===location.pathname){
            return true
        }
    }
    
 
  return (
    <footer className='navbar'>
        <nav className='navbarNav'>
            <ul className='navbarListItems'>
                <li className='navbarListItem' onClick={()=> navigate ('/')}>
                    <ExploreIcon
                     fill={pathMatchRoute('/') ? '#2c2c2c' : '#8f8f8f'} width='36px' height='36px'/>
                    <p className={pathMatchRoute('/') ? 'navbarListNameActive': 'navbarListItemName' }>Explore</p>
                </li>
                <li className='navbarListItem'onClick={()=> navigate ('/offers')}>
                    <OfferIcon 
                    fill={pathMatchRoute('/offers') ? '#2c2c2c' : '#8f8f8f'} 
                      width='36px'
                      height='36px'/>
                    <p className={pathMatchRoute('/offers') ? 'navbarListNameActive': 'navbarListItemName' }>Offers</p>
                </li>
                <li className='navbarListItem'onClick={()=> navigate ('/profile')}>
                    <PersonalOutlineIcon 
                    fill={pathMatchRoute('/profile') ? '#2c2c2c' : '#8f8f8f'} 
                      width='36px'
                       height='36px'/>
                    <p className={pathMatchRoute('/profile') ? 'navbarListNameActive': 'navbarListItemName' }>Profile</p>
                </li>
            </ul>
        </nav>
    </footer>
  )
}

export default NavBar