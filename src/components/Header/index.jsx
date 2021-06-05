import React from 'react';
import Menu from '../Menu';

const Header = ({page}) => {
  return(
    <div>
      <h3>Na dobrou noc</h3>
      <Menu page={page}/>
    </div>
  );
};

export default Header;