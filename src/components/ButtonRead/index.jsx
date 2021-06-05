import React from 'react';
import './style.css';
import { withRouter } from 'react-router-dom';
import arrow from './img/right-arrow.svg';

const ButtonRead = (props) => {

  const handleClick = () => {
    props.history.push(`/tales/${props.id}`)
  };

  return(
    <button onClick={handleClick} className='buttonread'>Přečíst <img className='arrow' src={arrow} /></button>
  );
};

export default withRouter(ButtonRead);