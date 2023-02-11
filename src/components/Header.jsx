import { Navbar } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="shadow">
      <div className="container mx-auto">
        <Navbar fluid={true} rounded={true}>
          <Navbar.Brand to="/navbars">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Flowbite
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Link to="/">
              <Navbar.Link>Home</Navbar.Link>
            </Link>
            <Link to="/post-blog">
              <Navbar.Link>Post Blog</Navbar.Link>
            </Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
