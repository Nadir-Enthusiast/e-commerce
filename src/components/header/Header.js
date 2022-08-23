import React, { useEffect } from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import {db, auth} from "../../firebase";

function Header() {
  const [{ cart, user }, dispatch] = useStateValue();

  const authenticationHandler = () => {
    if(user) {
        auth.signOut()
    }
  }
  
  const setDropdown = (event, uniqueId) => {
    if(document.getElementById(uniqueId).style.display === "none") {
        return (document
            .getElementById(uniqueId)
            .style
            .display = "block")
    } else {
        return (document
            .getElementById(uniqueId)
            .style
            .display = "none")
    }
  }


  const openMenu = () => {
    document.getElementById("homeSidebar").style.width = "35vw";
  }
  
  const closeMenu = () => {
    document.getElementById("homeSidebar").style.width = "0";
  }

  return (
    <div className='header'>
        <div id="homeSidebar" className="sidebar">
            <button className="close-menu-btn" onClick={closeMenu}>&times;</button>
            <div className="sidebar-elementSeparator"></div>
            <button className='sidebar-dropdownBtn' onClick={event => setDropdown(event, "first")}>
                About &#9662;
            </button>
            <div id='first' className="dropdown-container" style={{display: 'none'}}>
                <a href='/building' className='dropdown-sidebarOption'>General Info</a>
                <a href='/building' className='dropdown-sidebarOption'>History</a>
                <a href='/building' className='dropdown-sidebarOption'>Board of Directors</a>
                <a href='/building' className='dropdown-sidebarOption'>Staff</a>
                <a href='/building' className='dropdown-sidebarOption'>Job Offers</a>
                <a href='/building' className='dropdown-sidebarOption'>Disclaimer</a>
                <a href='/building' className='dropdown-sidebarOption'>Copyright</a>
            </div>
            <div className="sidebar-elementSeparator"></div>
            <button className='sidebar-dropdownBtn' onClick={event => setDropdown(event, "second")}>
                Delivery &#9662;
            </button>
            <div id='second' className="dropdown-container" style={{display: 'none'}}>
                <a href='/building' className='dropdown-sidebarOption'>Free Delivery</a>
                <a href='/building' className='dropdown-sidebarOption'>Paid Delivery</a>
            </div>
            <div className="sidebar-elementSeparator"></div>
            <button className='sidebar-dropdownBtn' onClick={event => setDropdown(event, "third")}>
                Products &#9662;
            </button>
            <div id='third' className="dropdown-container" style={{display: 'none'}}>
                <a href='/building' className='dropdown-sidebarOption'>Tech</a>
                <a href='/building' className='dropdown-sidebarOption'>Clothes</a>
                <a href='/building' className='dropdown-sidebarOption'>Books</a>
                <a href='/building' className='dropdown-sidebarOption'>Furniture</a>
                <a href='/building' className='dropdown-sidebarOption'>Raw-Materials</a>
                <a href='/building' className='dropdown-sidebarOption'>More</a>
            </div>
            <div className="sidebar-elementSeparator"></div>
            <button className='sidebar-dropdownBtn' onClick={event => setDropdown(event, "4th")}>
                Customer Service &#9662;
            </button>
            <div id='4th' className="dropdown-container" style={{display: 'none'}}>
                <a href='/building' className='dropdown-sidebarOption'>FAQ</a>
                <a href='/building' className='dropdown-sidebarOption'>Report</a>
                <a href='/building' className='dropdown-sidebarOption'>Feedback</a>
                <a href='/building' className='dropdown-sidebarOption'>Return products</a>
                <a href='/building' className='dropdown-sidebarOption'>Ask a question</a>
            </div>
            <div className="sidebar-elementSeparator"></div>
            <button className='sidebar-dropdownBtn' onClick={event => setDropdown(event, "5th")}>
                Contact &#9662;
            </button>
            <div id='5th' className="dropdown-container" style={{display: 'none'}}>
                <a href='/building' className='dropdown-sidebarOption'>Email</a>
                <a href='/building' className='dropdown-sidebarOption'>Mail</a>
                <a href='/building' className='dropdown-sidebarOption'>24/7 hotline</a>
                <a href='/building' className='dropdown-sidebarOption'>Chatbot</a>
            </div>
        </div>
        <div className="menu-container" onClick={openMenu}>
            <button className="open-menu-btn">
                <p className='icon-menu-header'>&#9776;</p><p className="text-menu-header">Menu</p>
            </button>
        </div>
        <div className="header-search-container">
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

            <Link to={user? '/orders' : '/login'}>
                <div className='header-option'>
                    <span className='header-optionLine-one'>
                        Orders and
                    </span>
                    <span className='header-optionLine-two'>
                        Delivery
                    </span>
                </div>
            </Link>

            <Link to={'/'}>
                <div className='header-option'>
                    <span className='header-optionLine-one'>
                        View
                    </span>
                    <span className='header-optionLine-two'>
                        Products
                    </span>
                </div>
            </Link>

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