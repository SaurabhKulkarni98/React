import React from 'react'
import { useEffect } from "react";
import {Link} from 'react-router-dom'
import logo from "../../assets/logo.png";
import search from "../../assets/search.svg";
import Avatar from '../Avatar/Avatar'

import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from '../../actions/currentUser';
import './Navbar.css'
const Navbar = () => {

  const dispatch = useDispatch();
  var User = useSelector((state) => (state.currentUserReducer))

  useEffect(() => {

   dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
},[dispatch])
  return (
    <nav className="main-nav">
      <div className="navbar">
        <Link to='/' className="nav-item nav-btn">
        <img src={logo} alt="logo" width="80"/>
            </Link>
            <Link to="/" className="nav-item nav-btn res-nav">
            About
          </Link>
          <Link to="/" className="nav-item nav-btn res-nav">
            Products
          </Link>
          <Link to="/" className="nav-item nav-btn res-nav">
            For Teams
          </Link>
            <form >
              <input type="text" placeholder='Search...'  />
              <img src={search} alt="search" width="18" className='search-icon' />
             </form>
             { User === null ? 
             (
              <Link to="/Auth" className="nav-item nav-links">
                Log in
              </Link>
            ) :
             <>
                <Avatar  backgroundColor="#009dff"
                px="10px"
                py="7px"
                borderRadius="50%"
                color="white"><Link to='/User' style={{color:"white", textDecoration:'none'}} >S</Link></Avatar>
                <button className='nav-item nav-links'>Log out</button>
             </>
            }
       
      </div>
    </nav>
  )
}

export default Navbar
