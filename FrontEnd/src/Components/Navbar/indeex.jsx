import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

//Icons
import { BiSearch } from "react-icons/bi";
import { SiFalcon } from "react-icons/si";

const Navbar = () => {
  let navigate = useNavigate();

  return (
    <nav className='NavBar'>
      <div
        className='LogoDiv'
        onClick={() => {
          navigate("/");
        }}>
        <SiFalcon className='LogoIcon' />
        <h1 className='Logo'>Falconce</h1>
      </div>
      <div className='MenuDiv'>
        <div className='SearchDiv'>
          <input type='text' placeholder='Crypto, stocks ...' />
          <BiSearch className='SearchIcon' />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
