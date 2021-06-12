import React, { useState, useEffect} from 'react';
import './style.css';
import up from './img/up.svg';

const ButtonUp = () => {

  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 400){
      setVisible(true)
    } 
    else if (scrolled <= 400){
      setVisible(false)
    }
  };

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return(
    <button 
      className='buttonup' 
      onClick={handleClick} 
      style={{display: visible ? 'inline' : 'none'}}>
        Nahoru <img className='up' src={up} />
    </button>
  );
};

export default ButtonUp;