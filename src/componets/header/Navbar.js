import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbarmainsection'>
        <div className='logonav'>
         <h1>kabeer</h1>
        </div>
        <div className='navmenu'>
        <li>
            <Link to="/" className='menulink'>Home</Link>
        </li>
        <li>
            <Link to="/homepage" className='menulink'>Contact</Link>
        </li>
        <li>
            <Link to="/aboutus" className='menulink'>About</Link>
        </li>
        <li>
            <Link to="/" className='menulink'>Sigin</Link>
        </li>
        </div>
       
    </div>
  )
}

export default Navbar