import React from 'react'
import './Navbar.css'
import logo from '../../assets/LOGO.png'
import menu_icon from '../../assets/menu-icon.jpg'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { useState } from "react";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = ()=>{
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true); }
  return (
    <nav className="container dark-nav">
        <img src={logo} alt="" className="logo"/>
        <ul className={mobileMenu?'':'hide-mob-menu'}>
            <li><Link to="back" smooth={true} offset={0} duration={500}>HOME</Link></li>
            <li><Link to="services" smooth={true} offset={-300} duration={500}>SERVICES</Link></li>
            <li><Link to="contact" smooth={true} offset={-290} duration={500} className='btn'>CONTACT US</Link></li>
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar