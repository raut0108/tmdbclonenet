import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../../assets/logo.png'


function NavBar() {
  return (
   
  //Here we will use NavLink to add active class to the current link
  <header className='flex flex-wrap justify-between items-center w-full px-4 py-2'>
    <NavLink to={'/'}> <img className='w-8 sm:w-10 md:w-12' src={logo} alt="Logo" /> </NavLink>
     
     <nav className='text-blue-500 text-lg sm:text-xl md:text-2xl font-bold space-x-4 sm:space-x-8'>
      <NavLink to={'/'} style={({isActive})=>({
        textDecoration : isActive?'underline':'none'
      })}>Movies</NavLink>

      <NavLink to={'watchlist'} style={({isActive})=>({
        textDecoration : isActive? 'underline' : 'none'
      })}>Watchlist</NavLink>
    </nav>

  </header>
) 
}

export default NavBar
