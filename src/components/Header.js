import React from 'react';
import { Nav, NavLink, Bars, NavMenu} from './Nav';

const Header = () => {
  return (
    <>
      <Nav>
        <NavLink to="">
          <h1>logo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/services" activeStyle>
            Services
          </NavLink>
          <NavLink to="/project" activeStyle>
            Project
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
}

export default Header