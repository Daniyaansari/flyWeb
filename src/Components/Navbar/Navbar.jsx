import React, { useState } from "react";
import logo from '../../assets/logo.png';
import { CgMenuGridO } from 'react-icons/cg';
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate } from 'react-icons/bs';
import { AiOutlineGlobal } from 'react-icons/ai';

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <>
      <div className="navBar flex">
        <div className="navBarOne flex">
          <div>
            <SiConsul />
          </div>

          <div className="none flex">
            <li className="flex"><BsPhoneVibrate className="icons" />Support</li>
            <li className="flex"><AiOutlineGlobal className="icons" />Languages</li>
          </div>

          <div className="atb flex">
            <span>Sign In</span>
            <span>Sign Out</span>
          </div>
        </div>

        <nav className="navigation">
          <div className="logoDiv">
            <img src={logo} alt="logo" className="Logo" />
          </div>

          <div className="hamburger"
            onClick={() => {
              setIsNavExpanded(!isNavExpanded)
            }}>
            <CgMenuGridO />
          </div>
          <div className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }>

            <div className="center">
              <ul className="flex">
                <li className="listItem">Home</li>
                <li className="listItem">About</li>
                <li className="listItem">Offers</li>
                <li className="listItem">Seats</li>
                <li className="listItem">Destinations</li>
                <li className="listItem"><button className="btn">Contact</button></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}