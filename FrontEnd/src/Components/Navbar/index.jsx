import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

//Icons
import { SiFalcon } from "react-icons/si";
import Search from "./Search";

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
      <Search />
    </nav>
  );
};

export default Navbar;
