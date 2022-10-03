import React from 'react';
import { Nav, NavLink, Bars,NavMenu } from './Nav';

const Header = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">home</NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/about" activeStyle>
            about
          </NavLink>
          <NavLink to="/services" activeStyle>
            services
          </NavLink>
          <NavLink to="/project" activeStyle>
            project
          </NavLink>
          <NavLink to="/contact" activeStyle>
            contact
          </NavLink>
        </NavMenu>
      </Nav>
      <div> hello </div>
    </>
  );
}

export default Header