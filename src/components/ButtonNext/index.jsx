import React from 'react';
import './style.css';
import { withRouter } from 'react-router-dom';

const ButtonNext = (props) => {

  const handleClick = () => {
    const idTales = props.id;
    props.history.push(`/tales/${idTales + 1}`);
    window.scrollTo({
      top: 0,
    });
  }

  return(
    <button disabled={props.id === 9} className={`buttonnext ${props.id === 9 ? 'disabled' : ''}`} onClick={handleClick}>Další pohádka</button>
  );
};

export default withRouter(ButtonNext);