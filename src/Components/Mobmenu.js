import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Mobmenu.css';
import logomob from '../Components/images/Logo.svg'
import logomob1 from '../Components/images/newlogo.png'
import { Link } from 'react-scroll';

import * as Scroll from 'react-scroll';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



const Mobmenu = () => {
  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });




  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector('.header-section');
    const scrollTop = window.scrollY;
    scrollTop >= 250 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
  };


  return (
    <div>
      <header className="header-section  d-xl-block">
        <div id='Topmob-sec'>
          <div className='container'>
            <div className='manu-grid'>
              <div className='menu1 menu_1'>
                <div className="hamburger-menu">
                  <input id="menu__toggle" type="checkbox" />
                  <label className="menu__btn" htmlFor="menu__toggle">
                    <span></span>
                  </label>

                  <ul className="menu__box">
                    <li><a className="menu__item" href="#Quality" smooth="true" offset={-70} duration={500}>Overview</a></li>
                    <li><a className="menu__item" href="#building" smooth="true" offset={-70} duration={500}>Building</a></li>
                    <li><a className="menu__item" href="#mapreacg-sec" smooth="true" offset={-70} duration={500}>Location</a></li>
                    <li><a className="menu__item" href="#floorplan" smooth="true" offset={-70} duration={500}>Floor Plan</a></li>
                    <li><a className="menu__item" href="#gallery" smooth="true" offset={-70} duration={500}>Gallery</a></li>
                    <li><a className="menu__item" href="#AmenitiesDetails" smooth="true" offset={-70} duration={500}>Amenities</a></li>
                    <li><a className="menu__item" href="#Specifications" smooth="true" offset={-70} duration={500}>Specifications</a></li>
                    <li><a className="menu__item" href="#Payment-sec" smooth="true" offset={-70} duration={500}>Payment Plans</a></li>
                    {/* <li><a className="menu__item" href="#connect" smooth="true" offset={-70} duration={500}>Get In Touch</a></li> */}
                    <li><a className="menu__item" > <div className="dropdown ">
                        <button type="button" className="btn slide_btn" data-bs-toggle="dropdown">
                          Get in Touch
                        </button>
                        <ul className="dropdown-menu">
                          <li><a className="dropdown-item" href="tel:+917895461239">CALL US</a></li>
                          <li><a className="dropdown-item" href="mailto:sanctorum@gmail.com">EMAIL US</a></li>
                          <li> <Link className="dropdown-item cursor_drop" to="connect" smooth="true" duration={800} >CONTACT US</Link> </li>
                          <li><a className="dropdown-item" href="https://api.whatsapp.com/send?phone=917895461239&text=Hello,%20">WHATSAPP</a></li>
                        </ul>
                      </div></a></li>
                    
                  </ul>
                </div>
              </div>
              <div className='menu1 logoct'>
                <Link to="top-sections" smooth="true" offset={-70} duration={800}><img src={logomob1} alt='logo' className='logo-new'></img></Link>
              </div>
              <div className='menu1 btn-rt'>
                {/* <button className='get-btn'><Link to="connect" smooth="true" offset={-60} duration={800}>GET IN TOUCH</Link></button> */}
                {/* <button className='get-btn'><Link to="connect" smooth="true" offset={-60} duration={800}>GET IN TOUCH</Link></button> */}
                <div className="dropdown">
                  <button type="button" className="btn get-btn dropdown-toggle" data-bs-toggle="dropdown">
                    GET IN TOUCH
                  </button>
                  <ul className="dropdown-menu ul-dropdown">
                    <li><a className="dropdown-item" href="tel:+917895461239">CALL US</a></li>
                    <li><a className="dropdown-item" href="mailto:sanctorum@gmail.com">EMAIL US</a></li>
                    <li> <Link className="dropdown-item cursor_drop" to="connect" smooth="true" duration={800} >CONTACT US</Link> </li>
                    <li><a className="dropdown-item" href="https://api.whatsapp.com/send?phone=917895461239&text=Hello,%20">WHATSAPP</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

    </div>
  )
}

export default Mobmenu;
