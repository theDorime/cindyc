import { useNavigate } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import '../styles/App.css';
import React from 'react';
//Nav bar template for current page 

export function SideNavBar(page, dropDownPath, subtitle) {
  //Initiate navigation
  const navigate = useNavigate();
  
  //Map paths to text 
  const links = [ 
      { path: '/', text: 'Home' }, 
      { path: '/Portfolio', text: 'Portfolio' }, 
      { path: '/Game', text: 'Game' },
      { path: '/Gallery', text: 'Film Photos' },
  ]

  const toggleStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    color: 'inherit',
    cursor: 'pointer',
    textDecoration: 'none',
    outline: 'none',
    boxShadow: 'none',
    margin: '0.5px',
    padding: '10px 20px'
  };

  const activeToggleStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    color: 'inherit',
    cursor: 'pointer',
    textDecoration: 'none',
    outline: 'none',
    boxShadow: 'none',
    fontWeight: 'bold',
    padding: '10px 20px'
  };
  //Create nav
  return (
    <div>
      <Navbar className="navBar ml-auto" fixed="top">
        <Nav>
          {links.map((link, index) => (
              <Nav.Link onClick={() => navigate(link.path)} className={page === link.text ? "active" : ""}>{link.text}</Nav.Link>
          ))}
         </Nav>
        {subtitle && <div className="navbar-subtitle">{subtitle}</div>}
      </Navbar>
    </div>
  );

};