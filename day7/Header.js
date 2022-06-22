import React, { useEffect } from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import {auth} from "./firebase";

function Header() {
  const [{ cart, user }, dispatch] = useStateValue();

  const authenticationHandler = () => {
    if(user) {
        auth.signOut()
    }
  }
  
  const setDropdown = () => {
    if(document.getElementById("first").style.display === "none") {
        return (document
            .getElementById("first")
            .style
            .display = "block")
    } else {
        return (document
            .getElementById("first")
            .style
            .display = "none")
    }
  }


  const openMenu = () => {
    document.getElementById("homeSidebar").style.width = "250px";
  }
  
  const closeMenu = () => {
    document.getElementById("homeSidebar").style.width = "0";
  }

  return (
    <div className='header'>
        <div id="homeSidebar" className="sidebar">
            <button className="close-menu-btn" onClick={closeMenu}>&times;</button>
            <a href="#">About</a>
            <button className='sidebar-dropdownBtn' onClick={setDropdown}>
                Products &#9662;
            </button>
            <div id='first' className="dropdown-container">
                <a href='#' className='dropdown-sidebarOption'>Tech</a>
                <a href='#' className='dropdown-sidebarOption'>Clothes</a>
                <a href='#' className='dropdown-sidebarOption'>Books</a>
                <a href='#' className='dropdown-sidebarOption'>Furniture</a>
                <a href='#' className='dropdown-sidebarOption'>Raw-Materials</a>
                <a href='#' className='dropdown-sidebarOption'>More</a>
            </div>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
        </div>
        <div className="menu-container" onClick={openMenu}>
            <button className="open-menu-btn">
            &#9776;Menu
            </button>
        </div>
        <Link to="/">
            <img 
                className='header-logo'
                src='https://previews.123rf.com/images/maclife/maclife1701/maclife170100008/70448471-dragon-logo-vector-icon-design.jpg'
                alt=""
            />
        </Link>

        <div className='header-search'>
            <input className='header-searchInput' type='text' />
            <SearchIcon className='header-searchIcon'/>
        </div>

        <div className='header-nav'>
            <Link to={!user && '/login'}>
                <div onClick={authenticationHandler} className='header-option'>
                    <span className='header-optionLine-one'>
                        Hello, {user ? user.email : "visitor"}
                    </span>
                    <span className='header-optionLine-two'>
                        {user ? "Sign Out" : "Sign In"}
                    </span>
                </div>
            </Link>

            <div className='header-option'>
                <span className='header-optionLine-one'>
                    Perks and
                </span>
                <span className='header-optionLine-two'>
                    Offers
                </span>
            </div>

            <div className='header-option'>
                <span className='header-optionLine-one'>
                    Account
                </span>
                <span className='header-optionLine-two'>
                    Premium
                </span>
            </div>

            <Link to="/checkout">
                <div className='header-optionCart'>
                    <ShoppingCartIcon />
                    <span className='header-optionLine-two header-cartCount'>{cart?.length}</span>
                </div>
            </Link>

        </div>

    </div>
  )
}

export default Header
