import React from 'react';
import Menu from '../Menu';
import './style.css';

const Header = ({page}) => {
  return(
    <div className='header'>
      <h3 className='logo'>Na dobrou noc</h3>
      <Menu page={page}/>
    </div>
  );
};

export default Header;