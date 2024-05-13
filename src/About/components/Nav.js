import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CgWebsite } from 'react-icons/cg';
import { LuBrainCircuit } from 'react-icons/lu';
import { MdDesignServices } from 'react-icons/md';
import { MdOutlineDeveloperMode } from 'react-icons/md';
import { MdManageHistory } from 'react-icons/md';
import { GiProcessor } from 'react-icons/gi';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isNav2textHovered, setNav2textHovered] = useState(false);
  const [isNavbarHovered, setNavbarHovered] = useState(false);
  const dropdownContentRef = useRef();
  const navbarContainerRef = useRef();

  const handleMouseEnter = () => {
    setNav2textHovered(true);
    setNavbarHovered(true);
  };

  const handleMouseLeave = () => {
    setNav2textHovered(false);
    setNavbarHovered(false);
  };

  useEffect(() => {
    const dropdownContentHeight = isNav2textHovered ? `${130}px` : '0px';

    if (dropdownContentRef.current) {
      dropdownContentRef.current.style.transition = 'height 0.5s ease';
      dropdownContentRef.current.style.height = dropdownContentHeight;
    }

    // Set height for navbar-container
    const navbarContainerHeight = isNavbarHovered ? `${200}px` : `${60}px`;
    if (navbarContainerRef.current) {
      navbarContainerRef.current.style.transition = 'height 0.5s ease';
      navbarContainerRef.current.style.height = navbarContainerHeight;
    }
  }, [isNavbarHovered, isNav2textHovered]);

  return (
    <div
      className="navbar-container"
      onMouseLeave={handleMouseLeave}
      ref={navbarContainerRef}
    >
      <div className="navlogo-content">
        <div className="logo">
          <span className="white-text">MindFul</span>
          <span className="purple-text">AI</span>
        </div>
        <div className="nav-links">
          <Link to="" className="Nav1text">
            Home
          </Link>
          <div
            className="dropdown"
            onMouseEnter={handleMouseEnter}
          >
            <Link
              to="/services"
              className={`Nav2text ${isNav2textHovered ? 'hovered' : ''}`}
            >
              Services
            </Link>
          </div>
          <Link to="/about" className="Nav4text">
            About
          </Link>
          <Link to="/contact" className="Nav5text">
            Contact
          </Link>
        </div>
      </div>
      <>
        <div
          className={`dropdown-content ${isNav2textHovered ? 'visible' : ''}`}
          ref={dropdownContentRef}
        >
          <div className="dropdown-rows">
            <Link to="/Service/FSD">
              <CgWebsite className="logo-navbar-services" />
              Full Stack Web Development
            </Link>
            <Link to="/Service/UIUX">
              <MdDesignServices className="logo-navbar-services" />
              UI/UX Designing
            </Link>
            <Link to="/Service/GenAI">
              <GiProcessor className="logo-navbar-services" />
              Generative AI
            </Link>
          </div>
          <div className="dropdown-rows">
            <Link to="/Service/ML">
              <LuBrainCircuit className="logo-navbar-services" />
              Machine Learning
            </Link>
            <Link to="/Service/Edu">
              <MdOutlineDeveloperMode className="logo-navbar-services" />
              Education
            </Link>
            <Link to="/Service/SAP">
              <MdManageHistory className="logo-navbar-services" />
              SAP
            </Link>
          </div>
        </div>
      </>
    </div>
  );
};

export default Navbar;
