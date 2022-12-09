import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className='container'>
            <nav>
                <h3>
                    <Link to='/'><i className='fas fa-video'></i>Search</Link> 
                </h3>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}
