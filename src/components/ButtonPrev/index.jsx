import React from 'react';
import './style.css';
import { withRouter } from 'react-router-dom';

const ButtonPrev = (props) => {

  const handleClick = () => {
    const idTales = props.id;
    props.history.push(`/tales/${idTales - 1}`);
    window.scrollTo({
      top: 0,
    });
  }

  return(
    <button disabled={props.id === 1} className={`buttonprev ${props.id === 1 ? 'disabled' : ''}`} onClick={handleClick}>Předchozí pohádka</button>
  );
};

export default withRouter(ButtonPrev);