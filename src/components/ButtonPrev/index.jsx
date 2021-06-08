import React from 'react';
import './style.css';
import { withRouter } from 'react-router-dom';

const ButtonPrev = (props) => {

  const handleClick = () => {
    const idTales = props.id;
    props.history.push(`/tales/${idTales - 1}`);
  }

  return(
    <button className='buttonprev' onClick={handleClick}>Předchozí pohádka</button>
  );
};

export default withRouter(ButtonPrev);