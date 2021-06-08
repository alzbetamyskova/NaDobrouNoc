import React from 'react';
import './style.css';
import { withRouter } from 'react-router-dom';

const ButtonNext = (props) => {

  const handleClick = () => {
    const idTales = props.id;
    props.history.push(`/tales/${idTales + 1}`);
  }

  return(
    <button className='buttonnext' onClick={handleClick}>Další pohádka</button>
  );
};

export default withRouter(ButtonNext);