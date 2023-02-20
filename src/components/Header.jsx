import { Navbar } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="shadow">
      <div className="container mx-auto">
        <Navbar fluid={true} rounded={true}>
          <Link to="/">
            <h2 className='font-extrabold text-xl'>Redux Blog</h2>
          </Link>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Link to="/">
              <Navbar.Link>Home</Navbar.Link>
            </Link>
            <Link to="/reading-history">
              <Navbar.Link>Reading History</Navbar.Link>
            </Link>
            <Link to="/post-blog">
              <Navbar.Link>Post Blog</Navbar.Link>
            </Link>
            <Link to="/delete-blog">
              <Navbar.Link>Delete Blog</Navbar.Link>
            </Link>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
