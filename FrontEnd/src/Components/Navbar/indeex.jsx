import React from "react";
import "./Navbar.css";

//Icons
import { BiSearch } from "react-icons/bi";
import { SiFalcon } from "react-icons/si";
import { CgMenuGridO } from "react-icons/cg";

const Navbar = () => {
  return (
    <nav className='NavBar'>
      <div className='LogoDiv'>
        <SiFalcon className='LogoIcon' />
        <h1 className='Logo'>Falconce</h1>
      </div>
      <div className='MenuDiv'>
        <div className='SearchDiv'>
          <input type='text' placeholder='Crypto, stocks ...' />
          <BiSearch className='SearchIcon' />
        </div>
        <CgMenuGridO className='MenuIcon' />
      </div>
    </nav>
  );
};

export default Navbar;
