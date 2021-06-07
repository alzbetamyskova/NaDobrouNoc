import React from 'react';
import Menu from '../Menu';
import './style.css';
import moon from '../../assets/night.svg';

const Header = ({page}) => {
  return(
    <div className='header'>
      <div className='logo'>
        <img className='moon' src={moon}/>
        <h3 className='textlogo'>Na dobrou noc</h3>
      </div>
      <Menu page={page}/>
    </div>
  );
};

export default Header;