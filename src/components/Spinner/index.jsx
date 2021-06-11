import React from 'react';
import './style.css';

const Spinner = ({heightauto}) => {
  return(
    <div className={`circle-container ${heightauto ? 'heightauto' : ''}`}>
      <div className="circle"></div>
    </div>
  );
};

export default Spinner;